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
      {{$ctrl.word}}
    `
  })