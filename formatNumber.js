//Function to format numbers from 123456789.00 to 123,456,789.00
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
