const {
  initializeCityDatabase,
  clearCityDatabase,
} = require("../common/common");

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  console.log("Run First test");
  expect("Vienna").toBeTruthy();
});

test("city database has San Juan", () => {
  console.log("Run Second test");

  expect("San Juan").toBeTruthy();
});
