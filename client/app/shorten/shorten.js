angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
    url: "http://www.mylittlepony.com"
  };

  $scope.addLink = function() {
    Links.addLink($scope.link.url);
  };

});
