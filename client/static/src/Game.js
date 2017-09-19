angular.module('word-search')
  .controller('gameCtrl', function($scope, randomWord) {
    this.word = "Start";
    this.input = ""
    this.length = 3;
    this.score = null;
    this.inputChange=() => {
      this.input = $scope.inputText;
      console.log('input change', this.input)
      if (this.word.length === this.input.length){
        if (this.word.toLowerCase() === this.input.toLowerCase()) { //success case
          if(this.score === null){
            this.score = 0;
          } else {
            this.score += 5*this.length; 
          }
          $scope.inputText = "";
          this.word = randomWord.generate(this.length, this.wordChange)
        
        }
      }
    };

    this.wordChange = (data) => {
      this.word = data.data
    }
  })
  .component('game', {
    controller: 'gameCtrl',
    template: `
    <div>
      <span class="randomWord">{{ $ctrl.word }}</span>
      <input ng-model="inputText" ng-change="$ctrl.inputChange()"></input>
    </div>
    <div>{{ $ctrl.score }}</div>
    `
  })