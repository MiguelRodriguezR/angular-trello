import {EditableTextComponent} from './editable-text.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [EditableTextComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
  exports: [EditableTextComponent]
})
export class EditableModule {
}
