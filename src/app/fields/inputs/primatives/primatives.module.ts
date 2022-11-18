import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeModule } from './box-size/box-size.module';
import { BoxScaleModule } from './box-scale/box-scale.module';
import { BoxSpeedModule } from './box-speed/box-speed.module';
import { MtSizeModule } from './mt-size/mt-size.module';
import { FontSizeModule } from './font-size/font-size.module';
import { FontSpeedModule } from './font-speed/font-speed.module';
import { LineSizeModule } from './line-size/line-size.module';
import { LineSpeedModule } from './line-speed/line-speed.module';
import { NudgeAmountModule } from './nudge-amount/nudge-amount.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BoxSizeModule,
    BoxScaleModule,
    BoxSpeedModule,
    MtSizeModule,
    FontSizeModule,
    FontSpeedModule,
    LineSizeModule,
    LineSpeedModule,
    NudgeAmountModule
  ],
  exports:[
    CommonModule,
    BoxSizeModule,
    BoxScaleModule,
    BoxSpeedModule,
    MtSizeModule,
    FontSizeModule,
    FontSpeedModule,
    LineSizeModule,
    LineSpeedModule
  ]
})
export class PrimativesModule { }
