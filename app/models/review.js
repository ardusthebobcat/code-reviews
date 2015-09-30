import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  tool_review: DS.attr(),
  review_tags: DS.hasMany('reviewtag', {async:true}),
  eoa_rating: DS.attr(),
  doc_rating: DS.attr(),
  score: DS.attr(),
  comments: DS.hasMany('comments', {async: true})
});
