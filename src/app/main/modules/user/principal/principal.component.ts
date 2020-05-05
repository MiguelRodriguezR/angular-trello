import {Component, OnInit} from '@angular/core';
import {STYLES} from '../../../constants/styles';
import {Board} from '../../../entities/Board';
import {List} from '../../../entities/List';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {STRINGS} from '../../../constants/strings';
import {TEST_BOARD} from "../../../constants/test";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  titleStyle = STYLES.titleStyle;
  strings = STRINGS;
  cardHeight = 0;
  board: Board;

  constructor() {
    this.board = new Board('New Project');
    //JUST FOR TESTING PROPOSES
    this.board = TEST_BOARD as Board;
  }

  createList(title) {
    this.board.lists.push(new List(title));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.lists, event.previousIndex, event.currentIndex);
  }

  cdkDragStarted(event: any) {
    this.cardHeight = event.source.element.nativeElement.offsetHeight;
  }

  test() {
    console.log(JSON.stringify(this.board));
  }

  ngOnInit(): void {
  }

}
