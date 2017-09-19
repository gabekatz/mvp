angular.module('word-search')
  .controller('highScoreListCtrl', function() {
    // this.highScores = [];

    this.$onInit = () => {
      console.log('from inside highscore list: ', this.highScores)
    }

    this.showList= () => {
      console.log(this.highScores)
    }
  })
  .component('highScoreList', {
    bindings: {
      highScores: "<",
    },
    controller: 'highScoreListCtrl',
    template:`
      <div>
        <table>
          <tr>
            <th>Player</th>
            <th>Score</th>
            <th>Rank</th>
          </tr>
          </table>
          <high-score-entry ng-repeat="entry in $ctrl.highScores" data-score-entry="entry"></high-score-entry>

      </div>
    `
  })