const strStr = require("./strStr.easy");

test("Example 1", () => {
    expect(strStr("hello", "ll")).toBe(2);
});
test("Example 2", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
});
test("Example 3", () => {
    expect(strStr("aaaaa", "")).toBe(0);
});
test("Example 4", () => {
    expect(strStr("lali", "li")).toBe(2);
});

describe("Random tests", () => {
    const allLetters = "abcdefghijklmnopqrstuvwxyz";
    const randomNumInRange = (start, end) =>
        Math.floor(Math.random() * (end - start)) + start;

    const randomHaystack = () => {
        let haystack = "";
        const length = randomNumInRange(1, 12);
        for (let i = 0; i < length; i++) {
            haystack += allLetters[randomNumInRange(0, allLetters.length)];
        }

        return haystack;
    };

    const getNeedleFromHaystack = (haystack) => {
        const randomStart = randomNumInRange(0, haystack.length);
        const needle = haystack.slice(
            randomStart,
            randomNumInRange(randomStart, haystack.length)
        );

        return [needle, needle === "" ? 0 : haystack.indexOf(needle)];
    };
    test("Testing on random strings 5 times.", () => {
        for (let i = 0; i < 5; i++) {
            const haystack = randomHaystack();
            const [needle, toBeRes] = getNeedleFromHaystack(haystack);

            expect(strStr(haystack, needle)).toBe(toBeRes);
        }
    });
});
