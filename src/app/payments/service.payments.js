(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .factory('Coach', Coach);

  /** @ngInject */
  function Coach (FIREBASE_URL, $firebaseAuth, $firebaseObject, $firebaseArray, Auth) {

    var itemsRef = new Firebase(FIREBASE_URL + '/payments');
    var Payment = $firebaseObject.$extend({
      $$defaults: {
        // default goes here
      }
    });
    var Payments = $firebaseArray.$extend({
      $$defaults: {
        // default goes here
      }
    })

    /* example of a payment object
    {
      company_id: 'whiucljkwxdh',
      team_id: 'cwjli2eidj', // teamId
      player_id: 'jwcioppjcw', // playerId
      payee_id: 'wcuhcepo2dep', // playerId or parentId
      payee_type: 'player', // player, guardian
      amount: 120000, // in cents
      method: 'ach', // 'ach', 'cc', 'manual_payment',
      note: 'Cathy gave me a person check at the bubble on the date' // optional text body for notes
    }
    */

    return {

      // return Object
      get: function (paymentId) {
        return Payment(itemsRef.child(paymentId));
      },

      // return Array
      getByCompany: function (companyId) {
        var query = itemsRef.orderByChild('company_id').equalTo(companyId);
        return Payments(query);
      },

      // return Array
      getByPlayer: function (playerId) {
        var query = itemsRef.orderByChild('player_id').equalTo(playerId);
        return Payments(query);
      },

      // return Array
      getByTeam: function (teamId) {
        var query = itemsRef.orderByChild('team_id').equalTo(teamId);
        return Payments(query);
      },

      all: function () {
        return Payments(itemsRef);
      }
    }


  }

})();
