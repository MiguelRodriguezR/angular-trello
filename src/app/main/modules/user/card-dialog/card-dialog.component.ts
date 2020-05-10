import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Card} from "../../../entities/Card";
import {STRINGS} from "../../../constants/strings";
import {STYLES} from "../../../constants/styles";
import {Checklist} from "../../../entities/Checklist";

class DialogData {
}

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  card: Card;
  strings = STRINGS;
  checkAdderStyle = STYLES.checkAdderStyle;

  constructor(public dialogRef: MatDialogRef<CardDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.card = this.data['card'];
  }

  closeD() {
    return 'hey';
  }

  addDesc(e) {
    this.card.description = e.target.value;
  }

  createCheck(title) {
    this.card.checks.push(new Checklist(title));
  }

}
