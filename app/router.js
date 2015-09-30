import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add-review');
  this.route('review', {path: '/review/:review_id'});
  this.route('tag');
});

export default Router;
