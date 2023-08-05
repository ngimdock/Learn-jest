describe("toEqual() ignores object keys with undefined properties, undefined array items, or object type mismatch.", () => {
  test("Test Objects with undefined key", () => {
    const data = { one: 1, two: undefined };
    data["three"] = 3;

    expect(data).toEqual({ one: 1, three: 3 });
  });

  test("Test Array with undefined items", () => {
    const arr = ["Fufu", "Eru"];
    arr.push("Koki");

    expect(arr).toEqual(["Fufu", "Eru", "Koki", undefined, undefined]);
  });
});

describe("To take these into account use toStrictEqual() instead toEqual()", () => {
  test("Test Objects with undefined key", () => {
    const data = { one: 1, two: undefined };
    data["three"] = 3;

    expect(data).toStrictEqual({ one: 1, three: 3 });
  });

  test("Test Array with undefined items", () => {
    const arr = ["Fufu", "Eru"];
    arr.push("Koki");

    expect(arr).toStrictEqual(["Fufu", "Eru", "Koki", undefined, undefined]);
  });
});
