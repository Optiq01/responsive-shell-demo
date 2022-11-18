import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapWInputComponent } from './crush-gap-w-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';



@NgModule({
  declarations: [
    CrushGapWInputComponent
  ],
  imports: [
    CommonModule,
    MtSizeModule
  ],
  exports: [
    CommonModule,
    CrushGapWInputComponent
  ],
  bootstrap: [CrushGapWInputComponent]
})
export class CrushGapWInputModule { }
