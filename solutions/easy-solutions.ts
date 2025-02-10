function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

/*
 * Time Complexity: O(n) - We iterate through the array once, using a hashmap for O(1) lookups.
 * Space Complexity: O(n) - We store up to n elements in the hashmap.
 */

// Example:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ");
}

/*
 * Time Complexity: O(n) - We split the string, reverse it, and join it back.
 * Space Complexity: O(n) - We store the words in an array.
 */

// Example:
console.log(reverseWords("the sky is blue")); // "blue is sky the"

function mostCommonCharacter(s: string): string {
  const freqMap = new Map<string, number>();
  let maxChar = "";
  let maxCount = 0;

  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
    if (freqMap.get(char)! > maxCount) {
      maxChar = char;
      maxCount = freqMap.get(char)!;
    }
  }

  return maxChar;
}

/*
 * Time Complexity: O(n) - We traverse the string once and store counts.
 * Space Complexity: O(1) - Since there are at most 26 lowercase letters, space usage is constant.
 */

// Example:
console.log(mostCommonCharacter("banana")); // "a"

function findDuplicates(nums: number[]): number[] {
  const seen = new Set<number>();
  const duplicates = new Set<number>();

  for (let num of nums) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

/*
 * Time Complexity: O(n) - We iterate through the array once.
 * Space Complexity: O(n) - We store unique elements in a set.
 */

// Example:
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]

function firstUniqueChar(s: string): number {
  const freqMap = new Map<string, number>();

  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

/*
 * Time Complexity: O(n) - Two passes, one for counting and one for finding the index.
 * Space Complexity: O(1) - The hashmap holds at most 26 letters.
 */

// Example:
console.log(firstUniqueChar("leetcode")); // 0
console.log(firstUniqueChar("aabbcc")); // -1
