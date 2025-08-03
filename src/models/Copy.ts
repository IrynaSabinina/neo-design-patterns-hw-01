import { AbstractBook } from "./AbstractBook";

export class Copy {
  private _book: AbstractBook;
  private _isAvailable: boolean = true;

  constructor(book: AbstractBook) {
    this._book = book;
  }

  get book(): AbstractBook {
    return this._book;
  }

  isCopyAvailable(): boolean {
    return this._isAvailable;
  }

  borrow(): boolean {
    if (!this._isAvailable) {
      return false;
    }
    this._isAvailable = false;
    return true;
  }

  returnCopy(): void {
    this._isAvailable = true;
  }
}
