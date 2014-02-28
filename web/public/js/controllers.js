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
  var app = window.app;
  $scope.kakao = function() {
    var kakaoUrl = 'kakaolink://sendurl?msg=Frost&nbsp;최고!&nbsp;Team&nbsp;Wangsimni에서&nbsp;제공하는&nbsp;왕십리&nbsp;음식점&nbsp;선택&nbsp;서비스입니다.%0A%0A안드로이드&nbsp;애플리케이션을&nbsp;다운로드해&nbsp;보세요%3A&url=https://play.google.com/store/apps/details?id=com.mintrupt.wangsimni.frost&appid=com.mintrupt.wangsimni.frost&appname=Frost&appver=0.3.1';
    app.open(kakaoUrl, '_system');
  };
  $scope.teamWangsimni = function() {
    app.open('http://wangsimni.github.io', '_system');
  };
})
