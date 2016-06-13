(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($state, $log, $mdSidenav, Auth, CurrentAuth, CurrentManager, CurrentCompany) {

    var vm = this;
    vm.me = CurrentAuth;
    if (CurrentCompany) {
      $state.current.data.hasCompany = true;
    } else {
      $state.current.data.hasCompany = false;
    }

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
