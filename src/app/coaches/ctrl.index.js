(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CoachIndexController', CoachIndexController);

  /** @ngInject */
  function CoachIndexController ($log, $state, $mdSidenav, $mdDialog, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

    // this needs to be turned into a service
    vm.inviteCoach = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.prompt()
        .title('Invite a coach')
        .textContent('Enter the coach\'s email address, and we will send them an invite')
        .placeholder('jordan@wolfpackapps.com')
        .ariaLabel('Coach to invite')
        // .initialValue('Buddy')
        .targetEvent(ev)
        .ok('Send invite')
        .cancel('Cancel');

      $mdDialog.show(confirm).then(function(result) {
        $log.log('You decided to name your dog ' + result + '.');
      }, function() {
        $log.log('You didn\'t name your dog.');
      });
    };

  }

})();
