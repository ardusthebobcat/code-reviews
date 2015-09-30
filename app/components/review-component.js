import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    showEdit(review) {
      if(prompt("What is the password")==="hi") {
        this.set('editForm', true);
        this.set('eoaNumber', review.get('eoa_rating'));
        this.set('docNumber', review.get('doc_rating'));
        this.set('scoreNumber', review.get('score'));
        var tagsPlaceholder = "";
        review.get('review_tags').forEach(function(join) {
          debugger;
          tagsPlaceholder += join.get('tag').get('name') + ", ";
        });
        this.set('tags', tagsPlaceholder);
      } else {
        $(".content").prepend("<div class='alert'>That is not the right password.</div>");
        $('.alert').delay(3000).fadeOut(1000, function() {$(this).remove();});
      }
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
    }
  }
});
