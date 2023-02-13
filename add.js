// add.js
module.exports = function add(numbers) {
    if (!numbers) {
      throw new Error("Numbers are missing");
    }
    return numbers.split(",").reduce((a, b) => a + +b, 0);
  };
  