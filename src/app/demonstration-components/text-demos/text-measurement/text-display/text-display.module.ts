import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDisplayComponent } from './text-display.component';



@NgModule({
  declarations: [
    TextDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TextDisplayComponent
  ],
  bootstrap: [ TextDisplayComponent ]
})
export class TextDisplayModule { }
