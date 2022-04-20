const { test, expect } = require("@jest/globals");
const longestCommonPrefix = require("./longestCommonPrefix.easy");

test("Example 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test("Example 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("Example 3", () => {
    expect(longestCommonPrefix(["flow", "flower", "flight"])).toBe("fl");
});
