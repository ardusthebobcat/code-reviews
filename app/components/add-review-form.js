import Ember from 'ember';

export default Ember.Component.extend({
  eoaNumber: "3",
  docNumber: "3",
  scoreNumber: "3",
  actions: {
    addReview() {
      var params= {
        name: this.get('tool_name'),
        url: this.get('url'),
        review: this.get('review'),
        tags: this.get('tags'),
        eoa_rating: this.get('eoaNumber'),
        doc_rating: this.get('docNumber'),
        score: this.get('scoreNumber'),
      };
      this.sendAction('addReview', params);
    }
  }
});
