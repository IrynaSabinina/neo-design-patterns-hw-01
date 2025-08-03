import { Copy } from "./Copy";

export class Reader {
  private _id: string;
  private _name: string;
  private _borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get borrowedCopies(): Copy[] {
    return this._borrowedCopies;
  }

  borrowCopy(copy: Copy): boolean {
    if (copy.borrow()) {
      this._borrowedCopies.push(copy);
      return true;
    }
    return false;
  }

  returnCopy(copy: Copy): void {
    const index = this._borrowedCopies.indexOf(copy);
    if (index >= 0) {
      this._borrowedCopies.splice(index, 1);
      copy.returnCopy();
    }
  }
}
