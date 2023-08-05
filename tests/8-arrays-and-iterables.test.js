describe("Arrays and Iterables", () => {
  const shoppingArray = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test(`The shopping Array has "milk" on it`, () => {
    expect(shoppingArray).toContain("milk");
  });

  test(`The shopping Set has "milk" on it`, () => {
    const shoppingSet = new Set(shoppingArray);

    expect(shoppingSet).toContain("milk");
  });
});
