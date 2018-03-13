function someOperation() {
  return 1;
}

const a = (x) => {
  const y = x + 1;

  return y;
};

const arr = [
  1,
  2,
  3,
];

for (const item of arr) {
  console.log(item) // eslint-disable-line
}

module.exports = {
  a,
  someOperation,
};
