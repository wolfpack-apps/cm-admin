(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/tmpl.register.html',
        controller: 'RegisterController',
        controllerAs: 'RegisterCtrl',
        data: {
          title: 'Register'
        }
      })
      .state('register.club', {
        url: '/:id',
        templateUrl: 'app/register/tmpl.club.html',
        controller: 'RegisterClubController',
        controllerAs: 'RegisterClubCtrl',
        data: {
          title: 'Register'
        }
      })
      .state('register.club.team', {
        url: '/team',
        templateUrl: 'app/register/tmpl.team.html',
        controller: 'RegisterTeamController',
        controllerAs: 'RegisterTeamCtrl',
        data: {
          title: 'Register'
        }
      })
      .state('register.club.payment', {
        url: '/payment',
        templateUrl: 'app/register/tmpl.payment.html',
        controller: 'RegisterPaymentController',
        controllerAs: 'RegisterPaymentCtrl',
        data: {
          title: 'Register'
        }
      })
      .state('register.club.confirm', {
        url: '/confirm',
        templateUrl: 'app/register/tmpl.confirm.html',
        controller: 'RegisterPaymentController',
        controllerAs: 'RegisterPaymentCtrl',
        data: {
          title: 'Register'
        }
      })
      .state('login', {
        url: '/',
        templateUrl: 'app/account/tmpl.login.html',
        controller: 'LoginController',
        controllerAs: 'LoginCtrl',
        data: {
          title: 'Login'
        }
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
          title: 'Your account'
        }
      })
      .state('li.tasks', {
        url: '/tasks',
        templateUrl: 'app/tasks/tmpl.index.html',
        controller: 'TasksController',
        controllerAs: 'TasksCtrl',
        data: {
          title: 'Your Tasks'
        }
      })
      .state('li.payments', {
        url: '/payments',
        templateUrl: 'app/payments/tmpl.index.html',
        controller: 'PaymentIndexController',
        controllerAs: 'PaymentsCtrl',
        data: {
          title: 'Your Payments'
        }
      })
      .state('li.teams', {
        url: '/teams',
        templateUrl: 'app/teams/tmpl.index.html',
        controller: 'TeamIndexController',
        controllerAs: 'TeamIndexCtrl',
        data: {
          title: 'Your Teams'
        }
      })
      .state('li.teams.detail', {
        url: '/:id',
        templateUrl: 'app/teams/tmpl.detail.html',
        controller: 'TeamDetailController',
        controllerAs: 'TeamDetailCtrl',
        data: {
          title: 'Team Detail'
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
