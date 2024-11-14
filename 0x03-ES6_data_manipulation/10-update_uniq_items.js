function updateUniqueItems(map) {
  // Check if the argument is a Map instance
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Loop through each entry in the map
  for (const [key, value] of map) {
    // Check if the quantity is 1
    if (value === 1) {
      map.set(key, 100); // Update the quantity to 100
    }
  }

  return map; // Return the updated map
}

