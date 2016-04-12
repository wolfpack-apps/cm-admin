(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CoachIndexController', CoachIndexController);

  /** @ngInject */
  function CoachIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
