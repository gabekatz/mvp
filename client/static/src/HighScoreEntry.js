angular.module('word-search')
.controller('highScoreEntryCtrl', function() {
})
.component('highScoreEntry', {
  bindings: {
    scoreEntry: "<",
  },
  controller: 'highScoreEntryCtrl',
  template:`
     <table>
        <tr>
          <td>{{$ctrl.scoreEntry.name}}</td>
          <td>{{$ctrl.scoreEntry.score}}</td>
          <td>{{$ctrl.scoreEntry.rank}}</td>
        </tr>
        </table>
      `
})
