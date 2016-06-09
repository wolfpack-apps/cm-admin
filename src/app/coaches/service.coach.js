(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Coach', Coach);

  /** @ngInject */
  function Coach ($log, FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject, $q, Auth, Manager) {

    var itemsRef = new Firebase(FIREBASE_URL + '/coaches');

    /* example of a company object
    {
      name: 'Bobby Read',
      manager_id: '25d77da1-398f-4519-be47-4ccfb99de0a6' || null,
      phone: '248-881-7460',
      address_street: '169 Saxon Ct',
      address_street_apt: 'Ste 2',
      address_city: 'Rochester Hills',
      address_state: 'MI',
      address_zip: '48307',
      address_lat: '90283092', // not now
      address_long: '9832394-', // not now
      teams: [ // empty array if no coaches
        'hd3ocp3k3': true,
        'ceh03cc3s': true
      ]

    }
    */

    var Coach = $firebaseObject.$extend({
      $$defaults: {
        teams: new Array()
      }
    });

    var Coaches = $firebaseArray.$extend({
      $$defaults: {
        teams: new Array()
      }
    });

    return {

      // return Object
      get: function (coachId) {
        return Coach(itemsRef.child(coachId));
      },

      // return Array
      getByCompany: function (companyId) {
        var query = itemsRef.orderByChild('company_id').equalTo(companyId);
        return Coaches(query);
      }

      // return Array
      all: function () {

        // return a promise leave this alone for a while
        return $q(function (resolve, reject) {
          Manager
            .$loaded()
            .then(function (managerData) {
              if (managerData.superadmin) {
                resolve(Coaches(itemsRef));
              } else {
                reject(new Error('Permission denied. Superadmin only.'));
              }
            }).catch(function (error) {
              reject(error);
            });
        });

      }

    };


  }

})();
