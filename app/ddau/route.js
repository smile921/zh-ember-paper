import Route from '@ember/routing/route';
import { debug } from '@ember/debug';

export default Route.extend({
    props2: 98,
    model() {
        let data = {};
        data.meta = { 'tatal': 1208, 'pageSize': 10, 'current': 6 };
        data.data = [
            { 'name': 'zhu yi', 'id': 1001 },
            { 'name': 'zhu jing', 'id': 1002 }
        ];
        debug('data down in route');
        return data;
    },
    actions: {
        routeNextPage() {
            debug('action up demo in route');
        },
        RouteNextPage2() {
            debug('action in toute next page 2')
        }
    }
});