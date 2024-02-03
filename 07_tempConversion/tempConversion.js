const convertToCelsius = function(t) {
  let celsius = (5/9)*(t - 32)
  return  celsius % 1 === 0? celsius: +celsius.toFixed(1);
};

const convertToFahrenheit = function(t) {
  let fa = (1.8*t) + 32;
  return  fa % 1 === 0? fa: +fa.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
