import { helper } from '@ember/component/helper';

export function isActive([routeName,activeRoute]) {
  return routeName === activeRoute;
}

export default helper(isActive);
