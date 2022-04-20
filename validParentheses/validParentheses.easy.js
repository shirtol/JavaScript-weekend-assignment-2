/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
        } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("}]"));
console.log(isValid("((((("));
console.log(isValid("[()]{}"));
