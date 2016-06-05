(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Company', Company);

  /** @ngInject */
  function Company (FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject, $q, Auth, Manager) {

    var itemsRef = new Firebase(FIREBASE_URL + '/companies');

    /* example of a company object
    {
      name: 'Vardar Soccer',
      manager_id: '25d77da1-398f-4519-be47-4ccfb99de0a6',
      phone: '248-881-7460',
      tax_id_federal: '22-7812937',
      tax_id_state: '21-2038703',
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
      ],
      coaches: [ // empty array if no coaches
        'oi3ducw': true,
        'cheicep'; true
      ]

    }
    */

    var Company = $firebaseObject.$extend({
      $$defaults: {
        teams: new Array()
      }
    })

    return {

      // return Object
      get: function (companyId) {
        return $firebaseObject(itemsRef.child(companyId));
      },

      // return Array
      all: function () {

        // return a promise leave this alone for a while
        return $q(function (resolve, reject) {
          Manager
            .$loaded()
            .then(function (managerData) {
              if (managerData.superadmin) {
                resolve($firebaseArray(itemsRef));
              } else {
                reject(new Error('Permission denied. Superadmin only.'));
              }
            }).catch(function (error) {
              reject(error);
            });
        });

      },
      mine: function () {
        var query = itemsRef.orderByChild('manager_id').equalTo(Auth.$getAuth().uid);
        return $firebaseArray(query);
      },
      getByState: function (state) {
        var query = itemsRef.orderByChild('address_state').equalTo(state);
        return $firebaseArray(query);
      },
      getByZip: function (zip) {
        var query = itemsRef.orderByChild('address_zip').equalTo(zip);
      },
      getByDistance: function (address) {
        // geocode the address and do something
        return;
      }

    };


  }

})();
