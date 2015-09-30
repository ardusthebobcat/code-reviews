import Ember from 'ember';

export default Ember.Route.extend({
  model(tag) {
    return this.store.find('tag', tag);
  }
});
