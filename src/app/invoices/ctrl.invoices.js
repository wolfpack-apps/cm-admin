(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('InvoicesIndexController', InvoicesIndexController);

  /** @ngInject */
  function InvoicesIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
