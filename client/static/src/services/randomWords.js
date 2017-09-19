angular.module('word-search')
  .service('randomWord', function($http){
    this.generate = (length, callback) => {
      $http({
        url: "http://setgetgo.com/randomword/get.php", 
        method: 'GET',
        params: {
          len: length,
        },
      })
      .then((data)=>{
        console.log('Random word generated :', data);
        callback(data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  })