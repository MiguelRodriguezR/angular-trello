import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {STRINGS} from "../../../constants/strings";

@Component({
  selector: 'app-list-adder',
  templateUrl: './list-adder.component.html',
  styleUrls: ['./list-adder.component.scss']
})
export class ListAdderComponent implements OnInit {

  @ViewChild('insideElement') insideElement;
  @ViewChild('input') input;
  @Output() listEvent = new EventEmitter<string>();
  text: string;
  placeholder: string;
  buttonText: string;
  isEditing = false;


  constructor() {
    this.text = STRINGS.listAdder.title;
    this.placeholder = STRINGS.listAdder.placeholder;
    this.buttonText = STRINGS.listAdder.button;
  }

  ngOnInit(): void {
  }


  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    this.isEditing = this.insideElement.nativeElement.contains(targetElement);
    this.text = this.isEditing ? '' : STRINGS.listAdder.title;
  }

  click() {
    const listName = this.input.nativeElement.value;
    if (listName !== '') {
      this.listEvent.emit(listName);
    }
  }

}
