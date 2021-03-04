'use strict'

/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Hard

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Follow up: The overall run time complexity should be O(log (m+n)).
*/

// My solution:
// var findMedianSortedArrays = function(nums1, nums2) {
//     let nums = []
//     nums.push(...nums1, ...nums2);
//     nums.sort((a, b) => a - b);
//     return (nums.length % 2 === 1) ? nums[(nums.length - 1) / 2] : (nums[(nums.length) / 2 - 1] + nums[(nums.length) / 2]) / 2;
// };

// // let nums1 = [1, 3];
// // let nums2 = [2];
// // console.log(findMedianSortedArrays(nums1, nums2), 2);

// // let nums1 = [1, 2];
// // let nums2 = [3, 4];
// // console.log(findMedianSortedArrays(nums1, nums2), 2.5);

// let nums1 = [];
// let nums2 = [2];
// console.log(findMedianSortedArrays(nums1, nums2), 2);


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
*/

// // My solution:
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let strLongest = "";
//     for (let char of s) {
//         strLongest = strLongest.slice(strLongest.indexOf(char) + 1) + char;
//         lenLongest = Math.max(lenLongest, strLongest.length)
//     }
//     return lenLongest;
// };


// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2);


// // The next approach is completely wrong!
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let lenLongest = 0;
//     let charsLongest = new Set();
//     for (let char of s) {
//         if (charsLongest.has(char)) {
//             lenLongest = Math.max(lenLongest, charsLongest.size);
//             charsLongest.clear();
//         }   
//         charsLongest.add(char);
//         console.log(charsLongest);
//     }
//     lenLongest = Math.max(lenLongest, charsLongest.size);
//     return lenLongest;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"), 3);
// console.log(lengthOfLongestSubstring("bbbbbb"), 1);
// console.log(lengthOfLongestSubstring("pwwkew"), 3);
// console.log(lengthOfLongestSubstring(""), 0);
// console.log(lengthOfLongestSubstring("bbbabc"), 3); // 2 3
// console.log(lengthOfLongestSubstring("bbbbbba"), 2); 

