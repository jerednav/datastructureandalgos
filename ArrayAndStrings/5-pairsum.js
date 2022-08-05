Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
test_00:

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

test_01:

pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

test_02:

pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]

test_03:

pairSum([1, 6, 7, 2], 13); // -> [1, 2]

test_04:

pairSum([9, 9], 18); // -> [0, 1]

test_05:

pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]


//Approach
1. Create hashmap to store values
2. Iterate through the array
3. create a number variable to hold each number's index and value
4. create a complement variable to find the difference between the target and numbers index
5. if complement is in previousNums, return the index and the index of the previousNums
6. if not, add index and value to prevnousNums hash map



//Solution
const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) return [i, previousNums[complement]];
    
    previousNums[num] = i;
  }
};


n = length of array
Time: O(n)
Space O(n)
