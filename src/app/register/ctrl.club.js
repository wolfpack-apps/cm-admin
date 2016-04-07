(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('RegisterClubController', RegisterClubController);

  /** @ngInject */
  function RegisterClubController ($log, $state, Auth) {

    var vm = this;

    vm.register = function () {
      $log.log('Attempting to register a new user');
      $log.log(vm.user);
      Auth.$createUser({
        email: vm.user.email,
        password: vm.user.password
      })
      .then(function (userData) {
        // create an account model with the user data
        $log.log("User created with uid: " + userData.uid);
      })
      .then(function (userData) {
        // send the user to the next stage in the form.
        $state.go('li.payments')
      })
      .catch(function(error) {
        $log.warn(error)
        vm.loginError = error;
      });
    }

  }

})();
