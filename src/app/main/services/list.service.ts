import {List} from '../entities/List';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  lists: Array<List>;
  listId: Array<string>;
  isCreating = false;

  constructor() {
    this.lists = [];
    this.listId = [];
  }

  addList(list, prefix) {
    this.isCreating = true;
    this.lists.push(list);
    this.listId.push('' + prefix + this.lists.length);
    this.isCreating = false;
    return '' + prefix + this.lists.length;
  }


}
