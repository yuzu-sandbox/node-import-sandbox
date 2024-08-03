import { compareHoge } from "package-b";
import { Hoge } from "package-a";

const hoge = new Hoge(5);

const result = compareHoge(hoge);
console.log("result:", result);
