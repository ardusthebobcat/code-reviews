import Ember from 'ember';

export default Ember.Component.extend({
  sortedTagsOrder: ['name:asc'],
  sortedTags: Ember.computed.sort('tags', 'sortedTagsOrder')
});
