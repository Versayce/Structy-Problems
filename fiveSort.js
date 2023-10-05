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

//tests
fiveSort([12, 5, 1, 5, 12, 7]);
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
fiveSort([5, 5, 5, 1, 1, 1, 4]);
