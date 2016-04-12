(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CoachDetailController', CoachDetailController);

  /** @ngInject */
  function CoachDetailController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
