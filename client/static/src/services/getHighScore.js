angular.module('word-search')
  .service('getHighScore', function($http){
    this.fetch = (callback) =>{
      $http.get('/api/highScore')
      .then((data)=>{
        callback(data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  })