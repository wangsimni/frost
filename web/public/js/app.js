angular.module('frost', ['ionic', 'doterra.services', 'doterra.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
    
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home'
    })
    .state('run', {
      url: '/run/:price',
      templateUrl: 'partials/run',
      controller: 'RunCtrl'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
})
