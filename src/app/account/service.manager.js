(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Manager', Manager);

  /** @ngInject */
  function Manager (FIREBASE_URL, $firebaseAuth, $firebaseObject, Auth) {

    var itemsRef = new Firebase(FIREBASE_URL + '/managers');

    /* example of a manager object (userData)
    {
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
    return $firebaseObject(itemsRef.child(Auth.$getAuth().uid));


  }

})();
