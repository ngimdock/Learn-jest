describe("Test floating numbers", () => {
  const value = 0.1 + 0.2;

  test("Adding floating point numbers", () => {
    // expect(value).toBe(0.3)   This won't work because of rounding error
    expect(value).toBeCloseTo(0.3);
  });
});
