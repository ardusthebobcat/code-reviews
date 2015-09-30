import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addReview(reviewParams, tagParams) {
      var newReview = this.store.createRecord('review', reviewParams);
      var context = this;
      tagParams.forEach(function(tagParam) {
        var newTag = context.store.createRecord('tag', tagParam);
        newReview.save().then(function() {
          newTag.save().then(function() {
            var reviewTagParams = {tag: newTag, review: newReview};
            var newReviewTag = context.store.createRecord('reviewtag', reviewTagParams);
            newReviewTag.save().then(function() {
              newReview.get('review_tags').addObject(newReviewTag);
              newTag.get('review_tags').addObject(newReviewTag);
              newReview.save().then(function() {
                newTag.save();
              })
            });
          });
        });
      });
      this.transitionTo('index');
    }
  }
});
