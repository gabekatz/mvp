angular.module('word-search')
  .service('getUserStats', function($http){
    this.fetch = (callback) => {
      $http.get('/api/user')
        .then((data)=>{
          callback(data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  })