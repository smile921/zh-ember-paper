import Controller from '@ember/controller';
import { debug } from '@ember/debug';

export default Controller.extend({
    props: 100,
    props1: 99,
    actions: {
        controllerNextPager() {
            debug("log in controller");
        },
        controllerNextPage2() {
            debug('send action next page 2 to route');
            // this.send('nextPage2');
        }
    }
});