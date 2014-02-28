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
    var kakaoUrl = 'kakaolink://sendurl?msg=Frost 최고!\nTeam Wangsimni에서 제공하는 왕십리 음식점 선택 서비스입니다.\n\nAndroid용 애플리케이션을 다운로드해 보세요:&url=https://play.google.com/store/apps/details?id=com.mintrupt.wangsimni.frost&appid=com.mintrupt.wangsimni.frost&appname=Frost&appver=0.3.2';
    app.open(encodeURI(kakaoUrl), '_system');
  };
  $scope.teamWangsimni = function() {
    app.open('http://wangsimni.github.io', '_system');
  };
})
