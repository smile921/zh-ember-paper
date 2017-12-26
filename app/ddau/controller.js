import Controller from '@ember/controller';
import { debug } from '@ember/debug';

export default Controller.extend({
    props: 100,
    props1: 99,
    actions: {
        nextPager() {
            debug("log in controller");
        },
        nextPage2() {
            debug('send action next page 2 to route');
            // this.send('nextPage2');
        }
    }
});