import Ember from 'ember';

export default Ember.Route.extend({
  model(tag) {
    return this.store.findRecord('tag', tag.tag_id);
  }
});
