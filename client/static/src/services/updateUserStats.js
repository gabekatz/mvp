angular.module('word-search')
.service('updateUserStats', function($http){
  this.update = (callback) => {
    $http.put('/api/user')
      .then((data)=>{
        callback(data);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
})