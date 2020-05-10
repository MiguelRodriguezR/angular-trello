export class CheckListElement {
  description: string;
  completed: boolean;

  constructor(desc) {
    this.description = desc;
    this.completed = false;
  }
}
