import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const new_Page1 = List(page1);
  const new_Page2 = List(page2);
  return new_Page1.concat(new_Page2);
}
export function mergeElements(page1, page2) {
  const new_Page1 = Map(page1);
  const new_Page2 = Map(page2);
  return new_Page1.merge(new_Page2);
}
