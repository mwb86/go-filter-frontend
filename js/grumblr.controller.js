(function(){
  angular
    .module('grumblr')
    .controller('GrumbleCtrl', GrumbleCtrl);

  GrumbleCtrl.$inject = ['$http', '$scope', 'GrumbleFactory'];

  function GrumbleCtrl($http, $scope, GrumbleFactory) {
    // var self = this;
    var rootURL = 'http://localhost:3000';

    //Index
    $scope.getGrumbles = function(){
      // $http.get(`${rootURL}/api/filters`)
      GrumbleFactory.get()
        .then(function(res){
          GrumbleFactory.grumbles = res.data;
          console.log(GrumbleFactory.grumbles);
          $scope.grumbles = GrumbleFactory.grumbles;
          $scope.grumble = undefined;
          console.log($scope.grumbles);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //Show
    $scope.showGrumble = function(id){
      $http.get(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.grumble = res.data;
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //Delete
    $scope.destroyGrumble = function(id){
      $http.delete(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.grumble = undefined;
          $scope.getGrumbles();
          console.log($scope.grumble);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //New
    $scope.createGrumble = function(grumble){
      $http.post(`${rootURL}/grumbles`, grumble)
        .then(function(res){
          console.log(res.data);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

    //Edit
    $scope.editGrumble = function(grumble){
      $http.put(`${rootURL}/grumbles/${$scope.grumble.id}`, grumble)
        .then(function(res){
          // $scope.getGrumbles(); //REdirect to Index
          $scope.grumble = res.data;
          console.log(res.data);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

  }
})();
