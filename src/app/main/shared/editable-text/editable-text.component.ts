import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.scss']
})
export class EditableTextComponent implements OnInit {

  @Input() obj: any;
  @Input() customStyle: {};
  @ViewChild('input', {static: false}) input;
  text: string;
  isEditing = false;

  constructor() {
  }

  ngOnInit(): void {
    this.text = this.obj.title;
  }

  setIsEditing() {
    this.isEditing = !this.isEditing;
  }

  changeText() {
    this.setIsEditing();
    this.obj.title = this.input.nativeElement.value;
  }

}
