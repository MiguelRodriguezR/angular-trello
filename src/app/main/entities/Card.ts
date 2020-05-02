import {Checklist} from "./Checklist";

export class Card {
  title: string;
  description: string;
  checks: Array<Checklist>;

  constructor(title) {
    this.title = title;
    this.checks = [];
  }
}
