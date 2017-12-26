import Route from '@ember/routing/route';
import inject from 'ember-service/inject';
// import RSVP from 'rsvp';
// import {set } from '@ember/object';
import { debug } from '@ember/debug';

export default Route.extend({
    ajax: inject(),
    model(queryParams) { //no_definitions=true&no_subcategories=false&order=default&page=1&_=1514267095609
        let base = "http://127.0.0.1/discourse";
        let path = '/latest.json';
        // RSVP.hash({});
        debug(queryParams);
        // this.store.query(path, queryParams);
        let q = this.get('buildQueryParams')(queryParams);
        return this.get('ajax').request(base + path + q);
    },
    buildQueryParams(params) {
        let qp = "?1=1";
        for (let o in params) {
            qp += '&' + o + '=' + params[o];
        }
        return qp;
    }
});