const isValid = require("./validParentheses.easy");

test("One pair of valid parenthesis", () => {
    expect(isValid("()")).toBe(true);
});
test("Number of pairs of valid parenthesis", () => {
    expect(isValid("()[]{}")).toBe(true);
});
test("One pair of invalid parenthesis", () => {
    expect(isValid("(]")).toBe(false);
});
test("All parenthesis are closing parenthesis", () => {
    expect(isValid("}]")).toBe(false);
});
test("All parenthesis are opening parenthesis", () => {
    expect(isValid("(((((((")).toBe(false);
});
test("Mix up pairs of valid parenthesis", () => {
    expect(isValid("[()]{}")).toBe(true);
});
