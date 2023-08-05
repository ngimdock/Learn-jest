const { sum } = require("../functions/functions");

describe("Test sum() module", () => {
  test("1 + 2 equals 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("5 + 10 not equals 20", () => {
    expect(sum(5, 10)).not.toBe(20);
  });
});
