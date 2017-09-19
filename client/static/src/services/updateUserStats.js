angular.module('word-search')
.service('updateUserStats', function($http){
  this.update = (userStats, callback) => {
    $http.put('/api/user', userStats)
      .then((data)=>{
        console.log('user update: ', userStats)
        if(callback){
          callback(data);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
  }
})