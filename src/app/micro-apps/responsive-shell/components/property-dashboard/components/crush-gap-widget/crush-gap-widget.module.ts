import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrushGapWidgetComponent } from './crush-gap-widget.component';
import { CrushGapWInputModule } from './crush-gap-w-input/crush-gap-w-input.module';
import { CrushGapHInputModule } from './crush-gap-h-input/crush-gap-h-input.module';
import { SrcryFieldModule } from '../srcry-field/srcry-field.module';



@NgModule({
  declarations: [
    CrushGapWidgetComponent
  ],
  imports: [
    CommonModule,
    SrcryFieldModule,
    CrushGapWInputModule,
    CrushGapHInputModule
  ],
  exports: [
    CommonModule,
    CrushGapWidgetComponent
  ],
  bootstrap: [CrushGapWidgetComponent]
})
export class CrushGapWidgetModule { }
