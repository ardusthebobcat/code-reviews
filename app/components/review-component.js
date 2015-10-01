import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  addCommentForm: false,
  actions: {
    showEdit(review) {
      this.set('editForm', true);
      this.set('eoaNumber', review.get('eoa_rating'));
      this.set('docNumber', review.get('doc_rating'));
      this.set('scoreNumber', review.get('score'));
      var tagsPlaceholder = "";
      review.get('review_tags').forEach(function(join) {
        tagsPlaceholder += join.get('tag').get('name') + ", ";
      });
      this.set('tags', tagsPlaceholder);
    },
    editReview(review) {
      var params = {
        name: this.get('tool_name'),
        url: this.get('url'),
        tool_review: this.get('tool_review'),
        tags: this.get('tags'),
        eoa_rating: this.get('eoaNumber'),
        doc_rating: this.get('docNumber'),
        score: this.get('scoreNumber')
      };
      this.sendAction('editReview', review, params);
      this.set('editForm', false);
    },
    deleteReview(review) {
      this.sendAction('deleteReview', review);
    },
    showCommentForm() {
      this.set('addCommentForm', true);
    },
    addComment(review) {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        review: this.get('review')
      };
      this.set('addCommentForm', false);
      this.sendAction('addComment', params);
    }
  }
});
