(function(){
  angular
    .module('grumblr')
    .factory('GrumbleFactory', GrumbleFactory);

  GrumbleFactory.$inject = ['$http'];

  function GrumbleFactory($http){
    return {
      grumbles: {},
      get: function(){
        return $http.get(`http://localhost:3000/api/filters`);
      }
    };
  };
})();
