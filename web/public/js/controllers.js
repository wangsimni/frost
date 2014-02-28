angular.module('doterra.controllers', [])

.controller('RunCtrl', function($scope, $stateParams, $http) {

  var queryUrl = '/run';

  var price = $stateParams.price;
  if (price == 'luxury') {
    queryUrl += '?priceLuxury=1';
  } else if (price == 'low') {
    queryUrl += '?priceLow=1';
  }

  $http.get(queryUrl).success(function(data) {
    $scope.store = data.store;
    $scope.reviews = data.reviews;
  });
})

.controller('HomeCtrl', function($scope) {
  
  $scope.kakao = function() {
    window.app.kakao();
  };
})
