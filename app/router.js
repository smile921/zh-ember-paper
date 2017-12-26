import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo', function() {
    this.route('autocomplete');
    this.route('button');
    this.route('card');
    this.route('checkbox');
    this.route('chips');
    this.route('dialog');
    this.route('divider');
    this.route('grid-list');
    this.route('icons');
    this.route('input');
    this.route('list');
    this.route('menu');
    this.route('tabs');
    this.route('progress-circular');
    this.route('progress-linear');
    this.route('radio');
    this.route('select');
    this.route('sidenav');
    this.route('slider');
    this.route('speed-dial');
    this.route('switch');
    this.route('toast');
    this.route('toolbar');
    this.route('tooltip');
    this.route('virtual-repeat');
  });
  this.route('forms');
  this.route('typography');
  this.route('theme');
  this.route('cookbook');
  this.route('addons');
  this.route('layout', function() {
    this.route('introduction');
    this.route('layout-containers');
    this.route('layout-children');
    this.route('child-alignment');
  });
  this.route('ddau');
  this.route('topic');
});

export default Router;
