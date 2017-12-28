import Route from '@ember/routing/route';
import { debug } from '@ember/debug';
export default Route.extend({
    actions: {
        loadMore() {
            debug('called load more in route');
        }
    }
});