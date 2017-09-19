angular.module('word-search')
  .controller('appCtrl', function(randomWord) {
    word = "";
    this.$onInit= () =>{
      //get high score
      randomWord.generate(4, this.updateWord)
    }

    this.updateWord = (data) => {
      this.word = data.data;
    }

  })
  .component('app', {
    controller: 'appCtrl',
    template: `
      <user> </user
      <div className="highscore-table">
        <highscore></highscore
      </div>
      <div className="game">
        <game></game>
      </div>

    `
  })