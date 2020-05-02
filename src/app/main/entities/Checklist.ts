import {CheckListElement} from './CheckListElement';

export class Checklist {
  title: string;
  elements: Array<CheckListElement>;
  completion: number;

  constructor(name) {
    this.title = name;
    this.elements = [];
    this.completion = 0;
  }

}
