import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrincipalComponent} from './principal/principal.component';
import {UserRoutingModule} from './user-routing.module';
import {EditableModule} from '../../shared/editable-text/editable.module';
import {ListAdderComponent} from './list-adder/list-adder.component';
import {MatButtonModule} from '@angular/material/button';
import { ListComponent } from './list/list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [PrincipalComponent, ListAdderComponent, ListComponent, CardComponent, CardDialogComponent],
  imports: [
    CommonModule,
    EditableModule,
    UserRoutingModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule
  ]
})
export class UserModule {
}
