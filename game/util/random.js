function randomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}

module.exports = { randomNum };