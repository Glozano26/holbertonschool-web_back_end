export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const formatBytes = new Int8Array(buffer);
  // formatBytes.setInt8(position, value);
  // value.forEach((values, position) => {
  formatBytes[position] = value;
  // });

  return new DataView(buffer);
}
