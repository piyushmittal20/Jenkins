const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello from Piyush and now you are in with the help of Jenkins.");
});

app.listen(5000, (req, res) => {
  console.log(`Server is running on PORT 5000...`);
});
