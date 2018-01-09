import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function isSubheading([row] /*, hash*/ ) {
    return typeOf(row) !== 'array';
}

export default helper(isSubheading);