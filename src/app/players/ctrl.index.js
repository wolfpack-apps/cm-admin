(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('PlayerIndexController', PlayerIndexController);

  /** @ngInject */
  function PlayerIndexController ($log, $state, $mdSidenav, $mdDialog, Auth, CurrentAuth, CurrentCompany, Helper, Player) {

    var vm = this;
    vm.data = $state.current.data;


    // this needs to be turned into a service
    vm.invitePlayer = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.prompt()
        .title('Invite a player')
        .textContent('Enter the player\'s email address, and we will send them an invite')
        .placeholder('jordan@wolfpackapps.com')
        .ariaLabel('Player to invite')
        // .initialValue('Buddy')
        .targetEvent(ev)
        .ok('Send invite')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(result) {
        // create a new account
        // we might need to validate this as an email
        Auth.$createUser({
          email: result,
          password: Helper.randomString(12)
        })
        .then(function (authData) {
          // create a new Coach
          Player
            .get(authData.uid)
            .$loaded()
            .then(function (playerData) {
              playerData.status = "invited";
              playerData.email = result;
              playerData.companies.push(CurrentCompany.$id);
              CurrentCompany.players.push(playerData.$id);

              // save the new coach id to the company array
              CurrentCompany
                .$save()
                .then(function (playerData) {
                  $log.log('Associated player with ' + playerData.name);
                });

              playerData
                .$save()
                .then(function (playerData) {
                  $state.go('li.players.detail', {id: playerData.key() });
                });
            })
        })
        .catch(function (error) {
          $log.error(error);
        });
      }, function() {
        $log.log('You didn\'t name your player.');
      });
    };

  }

})();
