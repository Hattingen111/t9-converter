import { TrieSearch } from "@committed/trie-search";
import cartesianProduct from "just-cartesian-product";

type PredictionObj = { _key_: string; value: string };

export function getPredictions(number: number, trie: TrieSearch) {
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

  const letters: Array<string[]> = number
    .toString()
    .split("")
    .map((number: string) => lettersByNumber[number]);

  const combos: string[] = cartesianProduct(letters).map((combo) =>
    combo.join("")
  );

  const predictions = combos
    .map((combo) => trie.get(combo) as Array<PredictionObj>)
    .filter((item) => item.length)[0]
    .map((predictionObj) => predictionObj.value)
    .filter((prediction) => prediction.length === number.toString().length);

  return { predictions, combos };
}
