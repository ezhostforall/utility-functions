const formatNumber = number => {
  let numberString = String(Math.floor(number));

  for (let i = numberString.length - 3; i > 0; i-=3) {
    numberString = numberString.slice(0, i) + ',' + numberString.slice(i);
  }

  return numberString;
}

export default formatNumber;
