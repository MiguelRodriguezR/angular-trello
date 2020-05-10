import {Component, Input, OnInit} from '@angular/core';
import {Checklist} from '../../../entities/Checklist';
import {Card} from '../../../entities/Card';
import {STRINGS} from "../../../constants/strings";
import {CheckListElement} from "../../../entities/CheckListElement";
import {STYLES} from "../../../constants/styles";

@Component({
  selector: 'app-check-list-container',
  templateUrl: './check-list-container.component.html',
  styleUrls: ['./check-list-container.component.scss']
})
export class CheckListContainerComponent implements OnInit {

  @Input() checklist: Checklist;
  @Input() card: Card;
  checkAdderStyle = STYLES.checkAdderStyle;
  strings = STRINGS;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkCompletion() {
    const completedChecks = this.checklist.elements.filter(e => e.completed);
    this.checklist.completion = this.checklist.elements.length > 0 ?
      Math.ceil(completedChecks.length * 100 / this.checklist.elements.length) : 0;
  }

  createCheck($event) {
    this.checklist.elements.push(new CheckListElement($event));
    this.checkCompletion();
  }

  check(e: CheckListElement) {
    e.completed = !e.completed;
    this.checkCompletion();
  }

}
