function ucFirst(str) {
  if (str === undefined || str == null || str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
