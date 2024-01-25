// Write a function that accepts two strings, where each string is a very large number (around
//     50 digits), and returns a sum of those two numbers.

function addLargeNumbers(num1, num2) {

    const bigintNum1 = BigInt(num1);
    const bigintNum2 = BigInt(num2);


    const result = bigintNum1 + bigintNum2;


    const resultStr = result.toString();

    return resultStr;
}

// Example usage
const largeNumber1 = "12345678901234567890123456789012345678901234567890";
const largeNumber2 = "98765432109876543210987654321098765432109876543210";

const sumResult = addLargeNumbers(largeNumber1, largeNumber2);
console.log(sumResult);