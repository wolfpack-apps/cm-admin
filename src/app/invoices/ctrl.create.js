(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('InvoicesCreateController', InvoicesCreateController);

  /** @ngInject */
  function InvoicesCreateController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
