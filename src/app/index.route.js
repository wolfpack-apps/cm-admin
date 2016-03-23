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
          }],
          "API_KEY": ["FIREBASE_URL", "$firebaseObject", function (FIREBASE_URL, $firebaseObject) {
            var itemsRef = new Firebase(FIREBASE_URL + "/edmunds_key");
            var obj = $firebaseObject(itemsRef);

            return obj.$loaded();

          }]
        },
        url: '/+',
        templateUrl: 'app/account/tmpl.li.html',
        controller: 'AccountController',
        controllerAs: 'AccountCtrl',
        abstract: true
      });

    $urlRouterProvider.otherwise('/');
  }

})();
