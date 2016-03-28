(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/account/tmpl.login.html',
        controller: 'LoginController',
        controllerAs: 'LoginCtrl'
      })
      .state('li', {
        resolve: {
          // controller will not be loaded until $requireAuth resolves
          // Auth refers to our $firebaseAuth wrapper in the example above
          "CurrentAuth": ["Auth", function(Auth) {
            // $requireAuth returns a promise so the resolve waits for it to complete
            return Auth.$requireAuth();
          }]
        },
        url: '/+',
        templateUrl: 'app/account/tmpl.li.html',
        controller: 'AccountController',
        controllerAs: 'AccountCtrl',
        abstract: true
      })
      .state('li.account', {
        url: '/account',
        templateUrl: 'app/account/tmpl.edit.html',
        controller: 'AccountEditController',
        controllerAs: 'AccountCtrl',
        data: {
          title: "Your account"
        }
      })
      .state('li.payments', {
        url: '/payments',
        templateUrl: 'app/payments/tmpl.index.html',
        controller: 'PaymentIndexController',
        controllerAs: 'PaymentsCtrl',
        data: {
          title: "Your payments"
        }
      })
      .state('li.teams', {
        url: '/teams',
        templateUrl: 'app/teams/tmpl.index.html',
        controller: 'TeamIndexController',
        controllerAs: 'TeamIndexCtrl',
        data: {
          title: "Your teams"
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
