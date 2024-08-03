import { Hoge } from "package-a";

export * from "package-a";

export function compareHoge(v: unknown): number {
  if (v instanceof Hoge) {
    return v.getValue();
  }

  return -1;
}
