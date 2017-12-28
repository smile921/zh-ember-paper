import Component from '@ember/component';
import {get, set } from '@ember/object';
import { debug } from '@ember/debug';

export default Component.extend({
    comId: 'ddau-component',
    // nextPagec: null,
    // nextPage2: null,
    routeNext: 'routeNextPage',
    props: null,
    actions: {
        exchangeComId() {
            let id = get(this, 'comId');
            if (id.length < 16) {
                id = id + ' 01';
            } else {
                id = 'component id';
            }
            // debugger
            set(this, 'comId', id);
        },
        nextPage(param) {
            debug('action up demo in component');
            let nextPage = get(this, 'nextPagec');
            // debugger;
            nextPage(param);
        },
        nextPage2() {
            debug('next page 2 in component' + this.get('nextPage2'));
            this.sendAction('nextPage2');
        },
        routeNextPage() {
            debug('component action call route Next page');
            this.sendAction('routeNext');
        }

    }
}).reopenClass({ 'positionalParams': ['nextPagec'] });