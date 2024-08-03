import { Hoge } from "package-a";
import { compareHoge } from "package-b";

const hoge = new Hoge(5);

const result = compareHoge(hoge);
console.log("result:", result);
