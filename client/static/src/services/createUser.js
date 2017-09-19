angular.module('word-search')
  .service('createUser', function($http){
    this.fetch = (callback) => {
      $http.post('/api/user')
        .then((data)=>{
          callback(data);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  })