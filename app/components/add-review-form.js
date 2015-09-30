import Ember from 'ember';

export default Ember.Component.extend({
  eoaNumber: "3",
  docNumber: "3",
  scoreNumber: "3",
  actions: {
    addReview() {
      var tagsArray = this.get('tags').replace(/, /gi, ",").split(",");
      var reviewParams = {
        name: this.get('tool_name'),
        url: this.get('url'),
        tool_review: this.get('tool_review'),
        review_tags: [],
        eoa_rating: this.get('eoaNumber'),
        doc_rating: this.get('docNumber'),
        score: this.get('scoreNumber'),
        comments: []
      };
      var tagParams = [];
      tagsArray.forEach(function(tag) {
        tagParams.push({name: tag, review_tags: []})
      });
      this.sendAction('addReview', reviewParams, tagParams);
    }
  }
});
