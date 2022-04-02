import express from "express";

const app = express();
// TODO: pass port from env
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
