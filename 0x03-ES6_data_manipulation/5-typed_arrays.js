/**
 * Creates a buffer array with a given position set to a given value.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const kok = new DataView(new ArrayBuffer(length), 0, length);
  kok.setInt8(position, value);
  return kok;
}
