import Controller from '@ember/controller';
import { debug } from '@ember/debug';
export default Controller.extend({
    queryParams: [
        'page', 'no_definitions', 'no_subcategories', 'order', '_'
    ],
    no_definitions: true,
    no_subcategories: false,
    order: 'default',
    page: 1,
    _: null,
    actions: {
        loadingMore() {
            debug('loading more from controller');
            debug('page ' + this.get('page'));
            this.set('page', 1 + this.get('page'));
        }
    }
});