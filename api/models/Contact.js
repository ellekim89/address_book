/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      // email: true,
      required: true
    },
    address: {
      type: 'string'
    },
    city:{
      type: 'string'
    },
    state:{
      type: 'string'
    },
    zipCode:{
      type: 'string'
    },
    phoneNumber:{
      type: 'string',
      defaultsTo: '111-222-3333'
    },
    person: {
      model: 'Person',
      defaultsTo:null
    }

  }
};

