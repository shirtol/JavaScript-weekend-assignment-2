/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

const strStr = function (haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let isSame = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    isSame = false;
                }
            }
            if (isSame) return i;
        }
    }

    return -1;
};

const strStrSimple = function (haystack, needle) {
    if (!needle) return 0;
    return haystack.indexOf(needle);
};

module.exports = strStr;
