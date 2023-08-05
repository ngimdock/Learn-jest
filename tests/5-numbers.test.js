describe("Test Numbers", () => {
  const value = 10 + 15;

  test("Test 10 + 15", () => {
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(25);
    expect(value).toBeLessThan(100);
    expect(value).toBeLessThanOrEqual(100);
  });
});
