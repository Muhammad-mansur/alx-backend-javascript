function cleanSet(set, startString) {
  // Return an empty string if startString is empty
  if (!startString) return '';

  return Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}

