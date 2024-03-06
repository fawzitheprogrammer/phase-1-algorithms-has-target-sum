function hasTargetSum(nums, target) {
  const seen = new Set();
  for (let num of nums) {
      const complement = target - num;
      if (seen.has(complement)) {
          return true;
      }
      seen.add(num);
  }
  return false;
}

// Additional test cases
console.log(hasTargetSum([3, 56, 5, 6, 11, 7], 10));
console.log(hasTargetSum([22, 66, 4, 6, 30], 25));  
console.log(hasTargetSum([1, 2, 5], 4));             
console.log(hasTargetSum([1, 53, 3, 45, 67], 10));     
console.log(hasTargetSum([-1, 5, 1], 0));           


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
