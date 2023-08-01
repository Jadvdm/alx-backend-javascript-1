/**
 * returns a string with a specific string
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const valSubStr = val.substring(startString.length);

      if (valSubStr && valSubStr !== val) {
        parts.push(valSubStr);
      }
    }
  }
  return parts.join('-');
}
