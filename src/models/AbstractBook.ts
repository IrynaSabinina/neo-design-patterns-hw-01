export abstract class AbstractBook {
  protected _title: string;
  protected _year: number;
  protected _authorName: string;

  constructor(title: string, year: number, authorName: string) {
    this._title = title;
    this._year = year;
    this._authorName = authorName;
  }

  get title(): string {
    return this._title;
  }

  get year(): number {
    return this._year;
  }

  get authorName(): string {
    return this._authorName;
  }

  abstract getDescription(): string;
}
