(function(){
  angular
    .module('grumblr')
    .directive('grumbleIndex', grumbleIndex);

  function grumbleIndex(){
    return {
      restrict: 'A',
      template: '<div ng-hide="grumble" ng-repeat="e in grumbles">' +
        '<h3 ng-click="showGrumble(e.id)">{{e.title}}</h3>'+
      '</div>' +
      '<form ng-hide="grumble" ng-submit="createGrumble(newGrumble)">' +
        '<h4>New Grumble</h4>' +
        '<label for="authorName">Author</label><br>' +
        '<input type="text" ng-model="newGrumble.authorName"><br>' +
        '<label for="title">Title</label><br>' +
        '<input type="text" ng-model="newGrumble.title"><br>' +
        '<label for="content">Content</label><br>' +
        '<input type="text" ng-model="newGrumble.content"><br>' +
        '<label for="photoUrl">Photo URL</label><br>' +
        '<input type="text" ng-model="newGrumble.photoUrl"><br>' +
        '<input type="submit" value="Submit">' +
      '</form>'
    };
  };
})();
