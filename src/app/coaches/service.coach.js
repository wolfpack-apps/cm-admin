(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Coach', Coach);

  /** @ngInject */
  function Coach (FIREBASE_URL, $firebaseAuth, $firebaseObject, Auth) {

    var itemsRef = new Firebase(FIREBASE_URL + '/coaches');
    var Coach = $firebaseObject.$extend({
      $$defaults: {
        teams: new Array()
      }
    });
    var Coaches = $firebaseArray.$extend({
      $$defaults: {
        teams: new Array()
      }
    })

    /* example of a manager object (userData)
    {
      first_name: 'Jordan',
      last_name: 'Skole',
      email: 'jordan@wolfpackapps.com',
      cell_phone: '2488817460',
      work_phone: '3135551234',
      birthday: '1985-07-16T19:20+01:00',
      street: '169 Saxon Ct',
      street2: 'Ste 200',
      city: 'Rochester Hills',
      state: 'MI',
      teams: [ // false if no teams
        '29c8cuc2u0c-0c3': true,
        'u20e9c-e2ic3': true
      ]
    }
    */
    return {
      get: function (coachId) {
        return Coach(coachId);
      },
      getCoachByEmail: function (coachEmail) {
        var query = itemsRef.orderByChild('email').equalTo(coachEmail);
        return Coach(query);
      }
    }


  }

})();
