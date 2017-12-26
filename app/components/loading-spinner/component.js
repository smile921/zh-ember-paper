import Component from '@ember/component';
import { debug } from '@ember/debug';
export default Component.extend({
    // loadingMore: null,
    actions: {
        loadingMore() {
            debug('loading more in loading spinner');
            // let ac = this.get('loadingMore');
            // debugger;
            this.sendAction('loadingMore');
        }
    }

});