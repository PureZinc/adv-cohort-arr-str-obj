function mergeIntervals(intervals: number[][]): number[][] {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = merged[merged.length - 1];
    let curr = intervals[i];

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}

/*
 * Time Complexity: O(n log n) - Due to sorting.
 * Space Complexity: O(n) - In the worst case, all intervals are stored.
 */

// Example:
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]

function groupAnagrams(words: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let word of words) {
    let sortedWord = word.split("").sort().join("");
    if (!map.has(sortedWord)) {
      map.set(sortedWord, []);
    }
    map.get(sortedWord)!.push(word);
  }

  return Array.from(map.values());
}

/*
 * Time Complexity: O(n * k log k) - Sorting each word takes O(k log k) and we do this for n words.
 * Space Complexity: O(n) - We store each word in a hash map.
 */

// Example:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

function longestPalindrome(s: string): string {
  let start = 0,
    maxLength = 0;

  function expandAroundCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  }

  for (let i = 0; i < s.length; i++) {
    let [l1, r1] = expandAroundCenter(i, i);
    let [l2, r2] = expandAroundCenter(i, i + 1);

    if (r1 - l1 > maxLength) {
      [start, maxLength] = [l1, r1 - l1];
    }
    if (r2 - l2 > maxLength) {
      [start, maxLength] = [l2, r2 - l2];
    }
  }

  return s.substring(start, start + maxLength + 1);
}

/*
 * Time Complexity: O(n²) - Expanding from every character.
 * Space Complexity: O(1) - No extra storage apart from variables.
 */

// Example:
console.log(longestPalindrome("babad")); // "bab" or "aba"

function flattenObject(
  obj: Record<string, any>,
  prefix = "",
  result: Record<string, any> = {}
): Record<string, any> {
  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

/*
 * Time Complexity: O(n) - We traverse all key-value pairs once.
 * Space Complexity: O(n) - We store all keys in a new object.
 */

// Example:
console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));
// { "a.b.c": 1, d: 2 }

function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => deepEqual(obj1[key], obj2[key]));
}

/*
 * Time Complexity: O(n) - We traverse every key-value pair.
 * Space Complexity: O(n) - Due to recursive calls.
 */

// Example:
console.log(deepEqual({ a: { b: 1 } }, { a: { b: 1 } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/*
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(1) - We use constant extra space.
 */

// Example:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (subarray: [4,-1,2,1])
