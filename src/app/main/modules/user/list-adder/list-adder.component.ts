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
  @Input() text: string;
  @Input() placeholder: string;
  @Input() buttonText: string;
  @Input() customStyle: {};
  inputColor;
  textDummy;
  isEditing = false;


  constructor() {
    // this.text = STRINGS.listAdder.title;
    // this.placeholder = STRINGS.listAdder.placeholder;
    // this.buttonText = STRINGS.listAdder.button;

  }

  ngOnInit(): void {
    this.textDummy = this.text;
    if (this.customStyle) {
      this.inputColor = {color: this.customStyle['color']};
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
