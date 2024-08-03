export class Hoge {
  private x: number;

  constructor(x: number = 1) {
    this.x = x;
  }

  getValue(): number {
    return this.x;
  }
}
