angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  $scope.filter = {
    text: ""
  };


  $scope.filterFunction = function(link) {
    if(link.url.indexOf($scope.filter.text) !== -1 || !$scope.filter.text.length
        || link.title.indexOf($scope.filter.text) !== -1) {
      return true;
    }
    return false;
  }

  console.log(" ---- LINKS ---- : ", Links);
  $scope.getLinks = function() {
    Links.getLinks(function(data){
      $scope.data.links = data;
      console.log(data);
    })
  };
  $scope.getLinks();
});




