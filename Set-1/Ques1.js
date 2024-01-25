// 1- Write a function that extracts the first and last digit in a string that can have any number of
// digits, and returns the sum of those digits. If there are no digits, return null. (E.g.
// ABC1YU5HG8BH returns 9)

function sumFirstAndLastDigit(inputString) {
    const digits = inputString.match(/\d/g);

    if (!digits) {
        return null;
    }

    const firstDigit = parseInt(digits[0], 10);
    const lastDigit = parseInt(digits[digits.length - 1], 10);

    return firstDigit + lastDigit;
}

// Example usage:
const inputString = "ABC1YU5HG8BH";
const result = sumFirstAndLastDigit(inputString);
console.log(result);