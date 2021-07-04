const ftoc = function(temp) {
  let cel = (temp - 32) * 5/9;
  rounded = Math.round(cel * 10) / 10;
  return rounded;
};

const ctof = function(temp) {
  let far = temp * 9/5 + 32;
  rounded = Math.round(far * 10) / 10;
  return rounded;
};

module.exports = {
  ftoc,
  ctof
};
