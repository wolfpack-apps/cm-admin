(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PaymentIndexController', PaymentIndexController);

  /** @ngInject */
  function PaymentIndexController ($log, $state, $mdSidenav, $mdMedia, $mdDialog, Auth, CurrentAuth, CurrentManager, CurrentCompany) {

    var vm = this;
    vm.data = $state.current.data;
    vm.company = CurrentCompany;

    vm.recordPayment = function (ev) {

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
      $mdDialog.show({
        controller: 'PaymentCreateController',
        controllerAs: 'PaymentCreateCtrl',
        templateUrl: 'app/payments/tmpl.create.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals: {
          CurrentCompany: CurrentCompany,
          CurrentManager: CurrentManager
        },
        bindToController: true
      })
      .then(function(answer) {
        $log.log('You said the answer was ' + answer);
      }, function() {
        $log.log('You cancelled the dialog.')
      });
    }

  }

})();
