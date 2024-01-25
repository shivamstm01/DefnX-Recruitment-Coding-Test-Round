// Write a function that takes a number in base 10, and a new base, then converts the number
// in that base. (E.g. 123 in base 16 is 7B)

function convertToBase(number, base) {
    if (base < 2 || base > 36) {
      return "Invalid base. Please choose a base between 2 and 36.";
    }
  
    return number.toString(base);
  }

  const decimalNumber = 123;
  const newBase = 16;
  const result = convertToBase(decimalNumber, newBase).toUpperCase();
  
  console.log(` ${decimalNumber} in base ${newBase} is ${result}`);
  