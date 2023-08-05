describe("Test Truthiness values (undefined, null, falsy etc)", () => {
  test("Test null values", () => {
    const value = null;

    expect(value).toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeFalsy();
  });

  test("Test defined values", () => {
    const value = 10;

    expect(value).toBeDefined();
    expect(value).toBeTruthy();
  });
});
