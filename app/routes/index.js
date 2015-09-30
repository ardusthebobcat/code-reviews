import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      reviews: this.store.findAll('review'),
      tags: this.store.findAll('tag')
    });
  }
});
