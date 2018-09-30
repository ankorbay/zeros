module.exports = function getZerosCount(number) {
  let counter = 0;

  while (number >= 5) // num of zeros at the end of number(n) is equal to (formula *): n/5+n/5^2+n/5^3+...
  // instead of calculating the power of 5 each time we may use the loop to devide each previos result by 5. 
  {
    number = Math.floor(number / 5); 
    counter += number;
  }
  return counter;
}
