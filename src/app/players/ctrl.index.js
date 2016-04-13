(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PlayerIndexController', PlayerIndexController);

  /** @ngInject */
  function PlayerIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
