angular.module('word-search')
  .controller('gameCtrl', function($scope, randomWord, getUserStats) {
    this.word = "Start";
    this.input = "";
    this.length = 3;
    this.score = null;
    this.counter = 0;
    this.increase = 3;
    this.timer = null;
    this.timerShow = null;
    this.lastScore = null;
    this.highScore = null;

    this.$onInit = () => {
      getUserStats.fetch(this.changeHighScore)
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
        
        } else {
          $scope.inputText = "";
        }
      }
    };

    this.countDown = () => {
      const time = setInterval( ()=> {
        if (this.timer === null){
          this.timer = 6;
        }
        this.timer -= 1
        this.timerShow = parseInt(this.timer)
        $scope.$apply()
        console.log(this.timer)
        if (this.timer <= 0){ //game end
          clearInterval(time);
          $scope.results = true;
          this.lastScore = this.score;
          this.score = null;
          alert(this.lastScore)
          this.word = "Start";
          $scope.inputText = ""

          $scope.$apply()
        }
      }, 1000)


    }

    this.wordChange = (data) => {
      this.word = data.data
    }
  })
  .component('game', {
    controller: 'gameCtrl',
    template: `
    <div>
      <span class="randomWord">{{ $ctrl.word }}</span>
      <input placeholder="Type in start to begin" ng-model="inputText" ng-change="$ctrl.inputChange()"></input>
    </div>
    <div>Score: {{ $ctrl.score }}</div>
    <div ng-model="timer">Timer: {{ $ctrl.timerShow }}</div>
    <div class="scoreScreen" ng-show="results">score screen</div>
    `
  })