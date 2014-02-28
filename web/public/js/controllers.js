angular.module('doterra.controllers', [])

.controller('RunCtrl', function($scope, $stateParams, $http, $sce) {

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
    console.log(data);
    $scope.title = data.store.price >= 10000 ? '비싼 음식점' : '안 비싼 음식점';
  });
})
