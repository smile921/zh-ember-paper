import Component from '@ember/component';
import { debug } from '@ember/debug';

export default Component.extend({
    loadMore1: 'loadMore',
    actions: {
        load() {
            debug('load in component');
            this.sendAction('loadMore1');
        }
    }
});