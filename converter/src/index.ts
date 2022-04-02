import express from "express";
import { getRouter } from "./router";
import { setupWordDict } from "./setupWordDict";

const app = express();
// TODO: pass port from env
const port = 8000;

const trie = setupWordDict();

app.use(express.json());
app.use("/", getRouter(trie));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
