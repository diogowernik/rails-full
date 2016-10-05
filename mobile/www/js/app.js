angular.module('brasilia', [
    'ionic',
    'ngResource',
    'brasilia.controllers',
    'brasilia.services',
    'brasilia.factories',
    'ng-token-auth'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.search', {
    url: '/encontrar',
    views: {
      'tab-search': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.chats', {
    url: '/mensagens',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chats.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/minha-conta',
    views: {
      'tab-account': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/session/login.html',
    controller: 'SessionCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
