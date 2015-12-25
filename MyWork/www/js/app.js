// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','PersonAccountModule','chart.js','CommModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.loanAccount', {
    url: '/loanAccount',
    views: {
      'tab-loanAccount': {
        templateUrl: 'templates/loanAccount.html',
        controller: 'LoanAccountCtrl'
      }
    }
  })

  .state('tab.inverstmentAccount', {
      url: '/inverstmentAccount',
      views: {
        'tab-inverstmentAccount': {
          templateUrl: 'templates/inverstmentAccount.html',
          controller: 'InverstmentAccountCtrl'
        }
      }
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('basicInfo', {
    url: '/basicInfo',
    cache:'false',
    templateUrl: 'templates/basicInfo.html',
    controller:'BasicInfoCtrl'
  })
  .state('identification', {
    url: '/identification',
    cache:'false',
    templateUrl: 'templates/identification.html',
    controller:'IdentificationCtrl'
  })
   .state('transactionRecord', {
    url: '/transactionRecord',
    cache:'false',
    templateUrl: 'templates/transactionRecord.html',
    controller:'TransactionRecordCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/loanAccount');

});
