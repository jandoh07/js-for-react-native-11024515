function processArray(numbers) {
  return numbers.map((num) => {
    if (num % 2 === 0) {
      return num * num;
    } else {
      return num * 3;
    }
  });
}

function formatArrayStrings(strings, numbers) {
  return strings.map((str, index) => {
    if (numbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}
