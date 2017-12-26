import Service from '@ember/service';
import {get } from '@emebr/object';
import { assign } from '@emebr/platform';
import computed from '@emebr/computed';
export default Service.extend({
    headers: computed({
        get() {
            return {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            }
        },
        set(hash) {
            return assign(get(this, 'headers'), hash);
        }
    })
});