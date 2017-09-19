angular.module('word-search')
  .service('createUser', function($http){
    this.fetch = (data, callback) => {
      $http.post('/api/user', data)
        .then((data)=>{
          if (callback){
            callback(data);
          }
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  })