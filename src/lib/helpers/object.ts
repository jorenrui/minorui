/**
 * object
 * Filters non-object value
 * Returns an object value
 *
 * @param value
 */
export function object<T>(value: T) {
  return typeof value === 'object'
    ? value
    : {};
}
