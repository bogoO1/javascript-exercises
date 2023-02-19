const fibonacci = function (num) {
  num = parseInt(num);
  if (typeof num === "number") {
    let nums = [1, 1];
    for (let i = 0; i < num; i++) {
     // console.log(nums);
      nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
    }
    console.log(nums[num - 1]);
    return nums[num - 1];
  }
  return "ERROR";
};
fibonacci(5);
// Do not edit below this line
module.exports = fibonacci;
