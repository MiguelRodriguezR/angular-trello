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

  openDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent,
      {panelClass: 'dialogC', data: {card: this.card}} as  MatDialogConfig<any>);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    // });
  }

}
