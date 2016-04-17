(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PlayerDetailController', PlayerDetailController);

  /** @ngInject */
  function PlayerDetailController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
