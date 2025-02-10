/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

const twoSum = (nums: number[], target: number): [number, number] | undefined => {
    const targetSubt = nums.map(num => target - num);
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(targetSubt[i])) {
            return [i, nums.indexOf(targetSubt[i])]
        }
    }
}

/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */

const stringReverse = (str: string): string => {
    return str.split(' ').reverse().join(' ');
}

/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

const commonChar = (str: string): string => {
    let charMap = {};
    let winningChar = str[0];
    let winningVal = 0;
    for (const char in str.split('')) {
        charMap[char] = charMap[char] + 1 || 0;
        if (charMap[char] > winningVal) {
            winningVal = charMap[char];
            winningChar = char;
        }
    }
    return winningChar;
}

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

const getDuplicates = (numArray: number[]): number[] => {
    let trashBin: number[] = [];
    let duplicates: number[] = [];
    numArray.forEach(num => {
        if (trashBin.includes(num)) {
            duplicates.push(num);
        } else {
            trashBin.push(num);
        }
    })
    return duplicates;
}

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

const firstUniqueChar = (str: string): number => {
    const strArray = str.split('');
    let trashBin: string[] = [];
    strArray.forEach((char, index) => {
        if (str.slice(index + 1).includes(char) || trashBin.includes(char)) {
            trashBin.push(char);
        } else {
            return index;
        }
    });
    return -1;
}