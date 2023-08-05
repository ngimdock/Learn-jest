function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

describe("Test exceptions", () => {
  test("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
