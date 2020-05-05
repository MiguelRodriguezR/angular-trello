import {Checklist} from "./Checklist";

export class Card {
  title: string;
  description: string;
  checks: Array<Checklist>;
  totalActivities: number;
  actualSolvedActivities: number;

  constructor(title) {
    this.title = title;
    this.checks = [];
    this.totalActivities = 0;
    this.actualSolvedActivities = 0;
  }
}
