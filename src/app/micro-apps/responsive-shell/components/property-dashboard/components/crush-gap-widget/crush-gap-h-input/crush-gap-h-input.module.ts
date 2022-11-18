import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapHInputComponent } from './crush-gap-h-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    CrushGapHInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    CrushGapHInputComponent
  ],
  bootstrap: [CrushGapHInputComponent]
})
export class CrushGapHInputModule { }
