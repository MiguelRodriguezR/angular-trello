import {Card} from "./Card";

export class List {
  cards: Array<Card>;
  title: string;

  constructor(title) {
    this.title = title;
    this.cards = [];
  }
}
