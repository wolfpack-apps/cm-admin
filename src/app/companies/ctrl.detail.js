(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CompanyDetailController', CompanyDetailController);

  /** @ngInject */
  function CompanyDetailController ($log, $scope, $state, $mdSidenav, CurrentAuth, Manager, Company) {

    var vm = this;
    vm.me = CurrentAuth;

    Company
      .get($state.params.id)
      .$loaded()
      .then(function (companyData) {
        vm.company = companyData;
      });

    /*
     * Functions
     */

    vm.saveCompany = function (route) {
      vm.company
        .$save()
        .then(function (ref) {
          $state.go(route)
        });
    }
  }

})();
