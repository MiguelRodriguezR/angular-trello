import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../../entities/List';
import {STRINGS} from '../../../constants/strings';
import {Card} from '../../../entities/Card';
import {STYLES} from '../../../constants/styles';
import {ListService} from '../../../services/list.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from '../../../entities/Board';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: List;
  @Input() board: Board;
  cardAdderStyle = STYLES.cardAdderStyle;
  listTilteStyle = STYLES.listTilteStyle;
  strings = STRINGS;
  listId: string;

  constructor(private listService: ListService) {
    // console.log(this);
  }

  ngOnInit(): void {
    this.listId = this.listService.addList(this.list, 'list-');
  }

  createCard(title) {
    this.list.cards.push(new Card(title));
  }

  get lservice() {
    return this.listService;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  deleteList() {
    this.board.lists = this.board.lists.filter(l => l !== this.list);
  }
}
