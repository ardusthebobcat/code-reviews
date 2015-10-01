import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {})
  },
  afterModel: function() {
    var sessionId = this.get("session").content.uid;
    return this.store.set("userData", this.store.findAll('user'));
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});
