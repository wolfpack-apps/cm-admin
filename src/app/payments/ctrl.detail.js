(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PaymentDetailController', PaymentDetailController);

  /** @ngInject */
  function PaymentDetailController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

  }

})();
