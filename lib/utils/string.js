
export function camelize(string) {
  return string.replace(/(\-|_|\s)+(.)?/g, function (_, sep, c) {
    return c ? c.toUpperCase () : '';
  });
}
