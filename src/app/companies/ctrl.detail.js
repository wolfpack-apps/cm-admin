(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CompanyDetailController', CompanyDetailController);

  /** @ngInject */
  function CompanyDetailController ($log, $scope, $state, $mdSidenav, CurrentAuth, Manager) {

    var vm = this;
    vm.me = CurrentAuth;

  }

})();
