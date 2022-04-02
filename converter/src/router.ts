import express from "express";
import { TrieSearch } from "@committed/trie-search";

import { getPredictions } from "./getPredictions";

const lettersByNumber: { [key: string]: string[] } = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

export function getRouter(trie: TrieSearch) {
  const router = express.Router();

  router.use("/", (req, res, next) => {
    const { number } = req.body;

    if (!number) {
      res.send({
        error:
          "Incorrect request, body must be JSON-object with 'number'-field",
      });
    } else if (
      number.toString().indexOf("1") !== -1 ||
      number.toString().indexOf("0") !== -1
    ) {
      res.send({
        error: "Incorrect request, 'number' should not contain '1' or '0'.",
      });
    } else {
      next();
    }
  });

  router.post("/", (req, res) => {
    const { number } = req.body;

    res.send(getPredictions(number, trie));
  });

  return router;
}
