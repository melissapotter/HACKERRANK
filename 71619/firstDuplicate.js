function firstDuplicate(a) {
  const dupes = {};
  for (var j = 0; j < a.length; j++) {
    if (dupes[a[j]]) {
      return a[j];
    }
    dupes[a[j]] = true;
  }
  return -1;
}
