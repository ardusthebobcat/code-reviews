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
    },
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var review = params.review;
      review.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return review.save();
      });
      this.transitionTo('review');
    }
  }
});
