(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('NotificationIndexController', NotificationIndexController);

  /** @ngInject */
  function NotificationIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
