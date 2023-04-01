function convertToNumber(str) {
    const num = parseInt(str);
    if (isNaN(num)) {
      return "Invalid number";
    }
    return num;
  }
  console.log(convertToNumber("123")); // Output: 123
  console.log(convertToNumber("abc")); // Output: "Invalid number"
    