import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapFieldComponent } from './crush-gap-field.component';



@NgModule({
  declarations: [
    CrushGapFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CrushGapFieldComponent
  ]
})
export class CrushGapFieldModule { }
