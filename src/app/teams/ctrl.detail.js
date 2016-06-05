(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('TeamDetailController', TeamDetailController);

  /** @ngInject */
  function TeamDetailController ($state, $mdSidenav, Auth, CurrentAuth, Team) {

    var vm = this;
    vm.data = $state.current.data;

    Team
      .get($state.params.id)
      .$loaded()
      .then(function (teamData) {
        vm.team = teamData;
      }, function (error) {
        $log.error(error);
      })

      vm.createTeam = function () {
        vm.teams
          .$add({'manager_id': vm.me.uid})
          .then(function (newTeam) {
            vm.manager.teams.push(newTeam.key());
            vm.manager.$save().then(function () {
              $state.go('li.teams.detail.create', {id: newTeam.key(), action: 'create' });
            })
          });
      }

      vm.saveTeam = function (route, createRoute) {
        vm.team
          .$save()
          .then(function (ref) {
            if ($state.params.action === 'create') {
              $state.go(createRoute)
            } else {
              $state.go(route)
            }
          });
      }

  }

})();
