import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../entities/Card';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CardDialogComponent} from "../card-dialog/card-dialog.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  isCheckList() {
    return this.card.checks.length > 0;
  }

  getChecksCurrentStatus() {
    const total = this.card.checks.map(c => c.elements).reduce((an, ac) => ac.concat(an));
    const actual = total.filter( ch => ch.completed);
    return actual.length + '/' + total.length;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent,
      {panelClass: 'dialogC', data: {card: this.card}} as  MatDialogConfig<any>);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    // });
  }

}
