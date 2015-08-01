angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  console.log(" ---- LINKS ---- : ", Links);
  $scope.getLinks = function() {
    Links.getLinks(function(data){
      $scope.data.links = data;
      console.log(data);
    })
  };
  $scope.getLinks();
});




