
const express = require("express");
const app = express();
const port = 3000;
app.get("/add", (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send({ error: "Numbers are missing" });
  }
  const sum = numbers.split(",").reduce((a, b) => a + +b, 0);
  res.send({ result: sum });
});
app.get("/multiply", (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
      return res.status(400).send({ error: "Numbers are missing" });
  }
  const product = numbers.split(",").reduce((a, b) => a * b, 1);
  res.send({ result: product });
});
app.listen(port, () => {
  console.log("Calculator app listening at port"+port);
});


//   what the user will do is to write this link in the browser:
// forexample  http://localhost:3000/add?numbers=1,2,3,5,4

//  and for multiplying these numbers the user will enter this url:
//  http://localhost:3000/multiply?numbers=1,2,3,5,4