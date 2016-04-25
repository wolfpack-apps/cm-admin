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
        abstract: true,
        data: {
          theme: 'default'
        }
      })
      .state('li.account', {
        url: '/account',
        templateUrl: 'app/account/tmpl.detail.html',
        controller: 'AccountDetailController',
        controllerAs: 'AccountDetailCtrl',
        data: {
          title: 'Your Account',
          theme: 'account'
        }
      })
      .state('li.account.name', {
        url: '/name',
        templateUrl: 'app/account/tmpl.detail.name.html',
        data: {
          title: 'Your Account - Edit: Name'
        }
      })
      .state('li.account.email', {
        url: '/email',
        templateUrl: 'app/account/tmpl.detail.email.html',
        data: {
          title: 'Your Account - Edit: Email'
        }
      })
      .state('li.account.phone', {
        url: '/phone',
        templateUrl: 'app/account/tmpl.detail.phone.html',
        data: {
          title: 'Your Account - Edit: Phone'
        }
      })
      .state('li.account.birthday', {
        url: '/birthday',
        templateUrl: 'app/account/tmpl.detail.birthday.html',
        data: {
          title: 'Your Account - Edit: Birthday'
        }
      })
      .state('li.account.address', {
        url: '/address',
        templateUrl: 'app/account/tmpl.detail.address.html',
        data: {
          title: 'Your Account - Edit: Address'
        }
      })
      .state('li.account.company', {
        url: '/:id',
        template: '<ui-view />',
        controller: 'CompanyDetailController',
        controllerAs: 'CompanyDetailCtrl',
        abstract: true
      })
      .state('li.account.company.name', {
        url: '/name',
        templateUrl: 'app/companies/tmpl.detail.name.html',
        data: {
          title: 'Your Company - Edit: Company'
        }

      })
      .state('li.notifications', {
        url: '/notifications',
        templateUrl: 'app/notifications/tmpl.index.html',
        controller: 'NotificationIndexController',
        controllerAs: 'NotificationIndexCtrl',
        data: {
          title: 'Your Notifications',
          theme: 'account'
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
      .state('li.payments.detail', {
        url: '/:id',
        templateUrl: 'app/payments/tmpl.detail.html',
        controller: 'PaymentDetailController',
        controllerAs: 'PaymentDetailCtrl',
        data: {
          title: 'Payment Detail'
        }
      })
      .state('li.teams', {
        url: '/teams',
        templateUrl: 'app/teams/tmpl.index.html',
        controller: 'TeamIndexController',
        controllerAs: 'TeamIndexCtrl',
        data: {
          title: 'Your Teams',
          theme: 'teams'
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
      })
      .state('li.players', {
        url: '/players',
        templateUrl: 'app/players/tmpl.index.html',
        controller: 'PlayerIndexController',
        controllerAs: 'PlayerIndexCtrl',
        data: {
          title: 'Your Players',
          theme: 'teams'
        }
      })
      .state('li.players.detail', {
        url: '/:id',
        templateUrl: 'app/players/tmpl.detail.html',
        controller: 'PlayerDetailController',
        controllerAs: 'PlayerDetailCtrl',
        data: {
          title: 'Player Detail'
        }
      })
      .state('li.coaches', {
        url: '/coaches',
        templateUrl: 'app/coaches/tmpl.index.html',
        controller: 'CoachIndexController',
        controllerAs: 'CoachIndexCtrl',
        data: {
          title: 'Your Coaches',
          theme: 'teams'
        }
      })
      .state('li.coaches.detail', {
        url: '/:id',
        templateUrl: 'app/coaches/tmpl.detail.html',
        controller: 'CoachDetailController',
        controllerAs: 'CoachDetailCtrl',
        data: {
          title: "Coach Detail"
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
