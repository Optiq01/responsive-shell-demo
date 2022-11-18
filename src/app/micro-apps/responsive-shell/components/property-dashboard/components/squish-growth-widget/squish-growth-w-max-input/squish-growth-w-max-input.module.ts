import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquishGrowthWMaxInputComponent } from './squish-growth-w-max-input.component';
import { MtSizeModule } from 'src/app/fields/inputs/primatives/mt-size/mt-size.module';
import { BoxSizeInputModule } from 'src/app/fields/inputs/box-size-input/box-size-input.module';



@NgModule({
  declarations: [
    SquishGrowthWMaxInputComponent
  ],
  imports: [
    CommonModule,
    BoxSizeInputModule
  ],
  exports: [
    CommonModule,
    SquishGrowthWMaxInputComponent
  ],
  bootstrap: [SquishGrowthWMaxInputComponent]
})
export class SquishGrowthWMaxInputModule { }
