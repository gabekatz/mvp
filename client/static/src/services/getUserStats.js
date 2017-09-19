angular.module('word-search')
  .service('getUserStats', function($http){
    this.fetch = (callback, username) => {
      $http({
        url: '/api/user', 
        method: 'GET',
        params: {
          name: username,
        }
      })
        .then((data)=> {
          console.log('successful get', data);
          callback(data);
        })
        .catch((err)=> {
          console.log(err);
        })
    }
  })