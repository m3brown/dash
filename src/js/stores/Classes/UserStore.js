var Store = require('./Store');
var resources = require('../../utils/resources');
var common = require('../../utils/common');

var User = Store.backbone.Model.extend({
  name: 'User',
  idAttribute: 'name',
  actions: {
    USER_DATA: function( action ) {
      var that = this;
      common.userData(action).done(function( newUserData ) {
        that.set(newUserData);
      });
    }
  }
});

var UserStore = Store.Collection.extend({
  model: User,
  url: resources.routes.ALL_USERS
});

module.exports = UserStore;
