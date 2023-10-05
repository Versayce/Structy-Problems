const fiveSort = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[end] === 5) {
      end--;
    }
    if(nums[start] === 5) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    } else {
      start++;
    }
  };
  console.log(nums)
  return nums;
};
