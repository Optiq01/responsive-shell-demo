import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthHMaxInputComponent } from './squish-growth-h-max-input.component';
//import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';
import { SquishGrowthWidgetComponent } from '../squish-growth-widget.component';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    SquishGrowthHMaxInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    SquishGrowthHMaxInputComponent
  ],
  bootstrap: [SquishGrowthWidgetComponent]
})
export class SquishGrowthHMaxInputModule { }
