(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('AccountEditController', AccountEditController);

  /** @ngInject */
  function AccountEditController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.me = CurrentAuth;

    /*
     * Functions
     */

    vm.toggleSidenav = function () {
      $mdSidenav('settings').toggle();
    }

  }

})();
