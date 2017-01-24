(function(){
  angular
    .module('grumblr')
    .directive('grumbleShow', grumbleShow);

  function grumbleShow(){
    return {
      restrict: 'E',
      template: '<div ng-show="grumble">' +
        '<h3>{{grumble.title}}</h3>' +
        '<h5>{{grumble.authorName}}</h5>' +
        '<button ng-click="destroyGrumble(grumble.id)">Delete Grumble</button>' +
        '<img src="{{grumble.photoUrl}}" alt="photo">' +
      '</div>' +
      '<form ng-show="grumble" ng-submit="editGrumble(grumble)">' +
        '<h4>Edit Grumble</h4>' +
        '<label for="authorName">Author</label><br>' +
        '<input type="text" ng-model="grumble.authorName"><br>' +
        '<label for="title">Title</label><br>' +
        '<input type="text" ng-model="grumble.title"><br>' +
        '<label for="content">Content</label><br>' +
        '<input type="text" ng-model="grumble.content"><br>' +
        '<label for="photoUrl">Photo URL</label><br>' +
        '<input type="text" ng-model="grumble.photoUrl"><br>' +
        '<input type="submit" value="Submit">' +
      '</form>'
    };
  };
})();
