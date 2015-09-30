import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  review_tags: DS.hasMany('reviewtag', {async: true})
});
