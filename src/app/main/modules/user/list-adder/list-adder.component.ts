import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
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
  @Input() strings;
  @Input() customStyle: {};
  text: string;
  placeholder: string;
  buttonText: string;
  inputColor;
  textDummy;
  isEditing = false;


  constructor() {}

  ngOnInit(): void {
    if (this.customStyle) {
      this.inputColor = {color: this.customStyle['color']};
    }
    if (this.strings) {
      this.text = this.strings.title;
      this.placeholder = this.strings.placeholder;
      this.buttonText = this.strings.button;
      this.textDummy = this.text;
    }
  }


  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    this.isEditing = this.insideElement.nativeElement.contains(targetElement);
    this.text = this.isEditing ? '' : this.textDummy;
  }

  click() {
    const listName = this.input.nativeElement.value;
    if (listName !== '' && listName !== this.placeholder) {
      this.listEvent.emit(listName);
      this.input.nativeElement.value = '';
    }
  }

}
