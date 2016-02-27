import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('login');

  this.route('index', { path: '/'}, function() {
    this.route('list');
    this.route('paragraph');
  });

  this.route('account');
});

export default Router;
