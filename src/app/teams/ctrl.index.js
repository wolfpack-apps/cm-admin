(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('TeamIndexController', TeamIndexController);

  /** @ngInject */
  function TeamIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
