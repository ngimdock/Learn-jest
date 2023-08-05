const { fetchData } = require("../common/common");

describe("Test asynchronous code with promise", () => {
  test("the data is peanut butter", () => {
    return fetchData().then((data) => {
      expect(data).toBe("peanut butter");
    });
  });

  test("the data shoul be defined", () => {
    return fetchData().then((data) => {
      expect(data).toBeDefined();
    });
  });
});
