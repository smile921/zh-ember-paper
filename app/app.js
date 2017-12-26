import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { debug } from '@ember/debug';

const App = Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver,
    advanceReadiness() {
        // console.clear();
        this._super(...arguments);
        debug('advanceReadiness called in application');
        // debugger
        // eslint-disable-next-line no-undef
        let el = Ember.get(this, 'rootElement');
        // debugger;
        debug(el);
    },
    ready() {
        debug('ready for routing in application');
    }
});

loadInitializers(App, config.modulePrefix);

export default App;