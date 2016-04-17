(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PaymentIndexController', PaymentIndexController);

  /** @ngInject */
  function PaymentIndexController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
