(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('TasksController', TasksController);

  /** @ngInject */
  function TasksController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
