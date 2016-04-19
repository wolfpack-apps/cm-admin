(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($state, $log, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.me = CurrentAuth;

    /*
     * Functions
     */

    vm.logout = function () {
      // log the user out
      Auth.$unauth();

      // then do something
      $state.go('login');
    }

    vm.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    }

  }

})();
