import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  comment: DS.attr(),
  review: DS.belongsTo('review', {async: true})
});
