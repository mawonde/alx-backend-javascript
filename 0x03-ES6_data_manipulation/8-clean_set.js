function cleanSet(mySet, startString) {
  const filteredValues = Array.from(mySet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}

export default cleanSet;
