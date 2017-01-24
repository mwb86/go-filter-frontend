(function(){
  angular
    .module('grumblr')
    .controller('newCtrl', newCtrl);

  newCtrl.$inject = ['GrumbleFactory'];

  function newCtrl(GrumbleFactory){
    this.showGrumbles = function(){
      console.log('New Controller', GrumbleFactory.grumbles);  
    }
  };
})();
