(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('AccountDetailController', AccountDetailController);

  /** @ngInject */
  function AccountDetailController ($log, $state, $mdSidenav, CurrentAuth, Manager) {

    var vm = this;
    vm.me = CurrentAuth;

    var manager = Manager;

    /*
     * Functions
     */
    manager.$loaded()
      .then(function () {
        $log.log('loaded');
        manager.first_name = 'Jordan';
        manager.last_name = 'Skole';
        manager.email = 'jordan@skole.us';
        manager.cell_phone = '2488817460';
        manager.work_phone = '3135551234';
        manager.birthday = '1985-07-16T19 =20+01 =00';
        manager.street = '169 Saxon Ct';
        manager.street2 = 'Ste 200';
        manager.city = 'Rochester Hills';
        manager.state = 'MI';

        manager.$save();
      })


  }

})();
