describe("Difference between toBe() and toEqual()", () => {
  describe("toBe() to check primitives (String, Number, Boolean)", () => {
    test("Test Numbers", () => {
      const valueToTest = 1 + 10;
      expect(valueToTest).toBe(11);
    });

    test("Test Strings", () => {
      expect("Ngimdock" + " Zemfack").not.toBe("Danilix Zemfack");
    });

    test("Test Booleans", () => {
      expect(1 === 20).toBe(false);
    });
  });

  describe("ToEqual() to test Objects and Arrays", () => {
    test("Test Objects", () => {
      const data = { one: 1 };
      data["two"] = 2;

      expect(data).toEqual({ two: 2, one: 1 });
    });

    test("Test Arrays", () => {
      const arr = ["Fufu", "Eru"];
      arr.push("Koki");

      expect(arr).toEqual(["Fufu", "Eru", "Koki"]);
    });
  });
});
