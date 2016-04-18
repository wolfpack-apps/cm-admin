(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Manager', Manager);

  /** @ngInject */
  function Manager (FIREBASE_URL, $firebaseAuth, $firebaseArray, $firebaseObject) {

    /* example of a manager object (userData)
    {
      uid: '56f6a463-4bf0-4073-b849-58d50544905e' // String
      first_name: 'Jordan',                       // String
      last_name: 'Skole',                         // String
      email: 'jordan@wolfpackapps.com',           // Email
      cell_phone: '2488817460',                   // Int
      work_phone: '3135551234',                   // Int
      birthday: '1985-07-16T19:20+01:00',         // Date
      street: '169 Saxon Ct',                     // String
      street2: 'Ste 200',                         // String
      city: 'Rochester Hills',                    // String
      state: 'MI'                                 // State
    }
    */

    var itemsRef = new Firebase(FIREBASE_URL + '/managers');
    var query = itemsRef.orderByChild('uid').equalTo(Auth.$getAuth().uid);

    return {
      create: function (userData) {
        return $firebaseArray(itemsRef).$add(userData);
      },
      get: function () {
        return $firebaseObject(query);
      }
    };
  }

})();
