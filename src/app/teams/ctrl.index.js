(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('TeamIndexController', TeamIndexController);

  /** @ngInject */
  function TeamIndexController ($state, $mdSidenav, Auth, CurrentAuth, Team) {

    var vm = this;
    vm.data = $state.current.data;

    Team
      .mine()
      .$loaded()
      .then(function (teamData) {
        vm.teams = teamData;
      }, function (error) {
        $log.error(error);
      })

  }

})();
