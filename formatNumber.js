/**
 * Formats a number with commas as thousands separators and ensures two decimal places.
 *
 * @param {number|string} input - The number to format. Can be a number or a string representation of a number.
 * @returns {string} The formatted number as a string with commas and two decimal places.
 * @throws {Error} Throws an error if the input is not a valid number.
 */
const formatNumber = input => {
  // Convert input to a number
  const number = Number(input);

  // Check if the conversion was successful
  if (isNaN(number)) {
    throw new Error('Input is not a valid number');
  }

  // Convert the number to a string with two decimal places
  let [integerPart, decimalPart] = number.toFixed(2).split('.');

  // Format the integer part with commas
  for (let i = integerPart.length - 3; i > 0; i -= 3) {
    integerPart = integerPart.slice(0, i) + ',' + integerPart.slice(i);
  }

  // Combine the formatted integer part with the decimal part
  return `${integerPart}.${decimalPart}`;
}

export default formatNumber;
