function numberChecker(numbers) {
    return function(num) {
      return numbers.includes(num);
    }
  }
  const nums = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(nums);
  
  console.log(checkNum(3)); // Output: true
  console.log(checkNum(6)); // Output: false
    