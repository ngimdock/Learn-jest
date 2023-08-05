function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 2000);
  });
}

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("City database initialized !"));
    }, 1000);
  });
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("City database cleared !"));
    }, 1000);
  });
}

module.exports = { fetchData, initializeCityDatabase, clearCityDatabase };
