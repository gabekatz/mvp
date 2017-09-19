angular.module('word-search')
  .controller('gameCtrl', function($scope, randomWord, getUserStats, updateUserStats, updateHighScore, getHighScore) {
    
    this.getList = (data) => { //refactor to call this from app instead
      this.highScores = data.data
    }

    this.resetGame = (lastScore) =>{
      this.word = "Start";
      this.input = "";
      this.length = 3;
      this.score = null;
      this.counter = 0;
      this.increase = 3;
      this.timer = null;
      this.timerShow = null;
      this.lastScore = lastScore || null;
      console.log(this.username, this.highScore)
    }

    this.$onInit = () => {
      this.resetGame()
    }

    this.changeHighScore = (data) =>{
      this.highScore = data.highScore
    };

    this.inputChange=() => {
      this.input = $scope.inputText;
      console.log('input change', this.input)
      if (this.word.length === this.input.length){
        if (this.word.toLowerCase() === this.input.toLowerCase()) { //success case
          if(this.score === null){ //after starting game
            this.score = 0;
            this.countDown();
            console.log('Game Started')
          } else { //correct input
            this.score += 5 * this.length; 
          }
          $scope.inputText = "";
          this.counter += 1
          if (this.counter % 5 === 0) {
            this.length += 1
          }
          if (this.counter % 3 === 0 && this.increase > 1) {
            this.increase -= 0.25;
          }

          this.timer += this.increase

          if(this.timer > 15){
            this.timer = 15;
          }

          this.timerShow = parseInt(this.timer)
          this.word = randomWord.generate(this.length, this.wordChange)
        
        } else { //incorrect input
          $scope.inputText = "";
        }
      }
    };

    this.countDown = () => {
      const time = setInterval( ()=> {
        if (this.timer === null){
          this.timer = 6;
        }
        this.timer -= 0.1
        this.timerShow = parseFloat(this.timer).toFixed(2);
        $scope.$apply()
        if (this.timer <= 0){ //game end
          clearInterval(time);
          $scope.results = true;

          this.resetGame(this.score)
          if (this.lastScore > this.highScore) { //if personal high score is beater
            updateUserStats.update({name: this.username, score: this.lastScore});
            this.highScore = this.lastScore;
            updateHighScore.update()
            getHighScore.fetch(this.getList)
          }

          alert(this.lastScore)

          $scope.$apply()
        }
      }, 100)


    }

    this.wordChange = (data) => {
      this.word = data.data
    }
  })
  .component('game', {
    bindings: {
      username: "<",
      highScore: "=",
    },
    controller: 'gameCtrl',
    template: `
    <div>
      <span class="randomWord">{{ $ctrl.word }}</span>
      <input placeholder="Type in start to begin" ng-model="inputText" ng-change="$ctrl.inputChange()"></input>
    </div>
    <div>Score: {{ $ctrl.score }}</div>
    <div ng-model="timer">Timer: {{ $ctrl.timerShow }}</div>
    <div class="scoreScreen" ng-show="results">Last Score: {{$ctrl.lastScore}}</div>
    `
  })