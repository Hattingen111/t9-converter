import { TrieSearch } from "@committed/trie-search";
import { zipObject } from "lodash";

export function setupWordDict() {
  const words: string[] = require("an-array-of-english-words");

  const wordObject = zipObject(words, words);

  const trie = new TrieSearch();

  trie.addFromObject(wordObject);

  return trie;
}
