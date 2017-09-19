angular.module('word-search')
  .controller('appCtrl', function(createUser, $scope, getUserStats) {
    word = "";
    $scope.gameShow = false;
    this.username = "";
    this.highScore = 0;

    this.initializeUser = () => {
      getUserStats.fetch(this.updateUser, $scope.username.toUpperCase());
    }

    this.updateUser = (data) => {
      if (data.data === ""){
        console.log('new user')
        createUser.fetch({name: $scope.username.toUpperCase(), score: 0})
        this.username = $scope.username.toUpperCase();
        this.highScore = 0
      } else {
        this.username = data.data.name;
        this.highScore = data.data.score;
        console.log('NAME: ',data.data.name, 'DATA: ', data)
      }
    }

    this.updateWord = (data) => {
      this.word = data.data;
    }

    this.showGame = () => {
      if(this.username !== "") {
        $scope.gameShow = $scope.gameShow === true ? false : true;
      } else {
        alert('Please enter a username');
      }
    }

  })
  .component('app', {
    controller: 'appCtrl',
    template: `
      <user> </user>
      <div class="highscore-table">
        <highscore></highscore
      </div>
      <input placeholder="Enter Username" ng-model="username"></input>
      <button ng-click="$ctrl.initializeUser()">Submit</button>
      <div class="personalScore"><p>Your High Score: {{$ctrl.highScore}}</p></div>
      <button ng-click="$ctrl.showGame()">Begin Game</button>
      <div class="game" ng-show="gameShow">
        <game data-username="$ctrl.username" data-high-score="$ctrl.highScore"></game>
      </div>
    `
  })