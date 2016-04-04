(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('TeamDetailController', TeamDetailController);

  /** @ngInject */
  function TeamDetailController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
