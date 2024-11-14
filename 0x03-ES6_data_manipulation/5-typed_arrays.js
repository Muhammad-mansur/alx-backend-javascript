export default function createInt8TypedArray(length, position, value) {

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a view of the buffer as an In8Array
  const int8Array = new Int8Array(buffer);

  // Check if the position is within the bounds of the array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the specified value at the given position
  int8Array[position] = value;

  // Return the ArrayBuffer
  return buffer;
}

  
