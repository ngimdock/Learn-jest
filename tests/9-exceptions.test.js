function compileAndroidCode() {
  throw new Error("And error occured..");
}

describe("Test exceptions", () => {
  test("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  });
});
