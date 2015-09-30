import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  review: DS.attr(),
  tags: DS.attr(),
  eoa_rating: DS.attr(),
  doc_rating: DS.attr(),
  score: DS.attr()
});
