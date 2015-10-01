import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser(params) {
      var ref = new Firebase("https://codereviews.firebaseio.com");
      ref.createUser({
        email    : params.email,
        password : params.password
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
      var newParams = {username: params.username, email: params.email};
      var newUser = this.store.createRecord('user', newParams);
      debugger;
      newUser.save();
      this.transitionTo('login');
    },
    login(params, context) {
      var ref = new Firebase("https://codereviews.firebaseio.com");
      ref.authWithPassword({
        email    : params.email,
        password : params.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          window.location.reload();
        }
      });
    }
  }
});
