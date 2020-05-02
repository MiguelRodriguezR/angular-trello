import {List} from './List';

export class Board {
  title: string;
  lists: Array<List>;

  constructor(title) {
    this.title = title;
    this.lists = [];
  }
}
