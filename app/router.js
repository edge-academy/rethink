import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account');
  this.route('demo');
<<<<<<< HEAD
  
=======
>>>>>>> 3fbf692cca9949bf808227faa9f9a3086688478f
});

export default Router;
