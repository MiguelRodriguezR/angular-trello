import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrincipalComponent} from './principal/principal.component';
import {UserRoutingModule} from './user-routing.module';
import {EditableModule} from '../../shared/editable-text/editable.module';
import {ListAdderComponent} from './list-adder/list-adder.component';
import {MatButtonModule} from '@angular/material/button';
import { ListComponent } from './list/list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [PrincipalComponent, ListAdderComponent, ListComponent],
  imports: [
    CommonModule,
    EditableModule,
    UserRoutingModule,
    MatButtonModule,
    DragDropModule
  ]
})
export class UserModule {
}
