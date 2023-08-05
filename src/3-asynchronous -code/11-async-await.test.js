const { fetchData } = require("../common/common");

describe("Test asynchronous code with Async/Await", () => {
  test("The data is peanut butter", async () => {
    const data = await fetchData();

    expect(data).toBe("peanut butter");
  });

  test("The fetch fails with an error", async () => {
    expect.assertions(1);

    try {
      await fetchData();
    } catch (err) {
      expect(err).toMatch("error");
    }
  });
});
