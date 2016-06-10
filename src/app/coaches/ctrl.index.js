(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('CoachIndexController', CoachIndexController);

  /** @ngInject */
  function CoachIndexController ($state, $mdSidenav, $mdDialog, Auth, CurrentAuth) {

    var vm = this;
    vm.data = $state.current.data;

    vm.inviteCoach = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('What would you name your dog?')
        // .textContent('Bowser is a common name.')
        // .placeholder('Dog name')
        .ariaLabel('Dog name')
        // .initialValue('Buddy')
        .targetEvent(ev)
        .ok('Okay!')
        .cancel('I\'m a cat person');
      $mdDialog.show(confirm).then(function(result) {
        vm.status = 'You decided to name your dog ' + result + '.';
      }, function() {
        vm.status = 'You didn\'t name your dog.';
      });
    };

  }

})();
