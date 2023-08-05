describe("Test Strings", () => {
  test("There is no I in item", () => {
    expect("item").not.toMatch(/I/);
  });

  test(`But there is a "stop" in Christoph`, () => {
    expect("Christoph").toMatch(/stop/);
  });
});
