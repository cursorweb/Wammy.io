function circCircCol(x1, y1, diam1, x2, y2, diam2) {
  let dx = x1 - x2;
  let dy = y1 - y2;
  let dist2 = dx ** 2 + dy ** 2;
  let sum = (diam1 + diam2) / 2;
  return dist2 <= sum ** 2;
}

module.exports = { circCircCol };