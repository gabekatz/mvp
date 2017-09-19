angular.module('word-search')
.service('updateHighScore', function($http){
  this.update = (callback) => {
    $http.put('/api/highScore')
      .then((data)=>{
        if(callback){
          callback(data);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }
})