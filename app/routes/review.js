import Ember from 'ember';

export default Ember.Route.extend({
  model(review) {
    return this.store.find('review', review.review_id);
  },
  actions: {
    editReview(review, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          review.set(key, params[key]);
        }
      });
      review.save();
      this.transitionTo('review');
    },
    deleteReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
  }
});
