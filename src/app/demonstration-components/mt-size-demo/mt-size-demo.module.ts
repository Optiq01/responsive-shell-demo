import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtSizeDemoComponent } from './mt-size-demo.component';
import { BoxSizeVariantModule } from '../box-size-demos/variation-demo/box-size-variant/box-size-variant.module';



@NgModule({
  declarations: [
    MtSizeDemoComponent
  ],
  imports: [
    CommonModule,
    BoxSizeVariantModule
  ],
  exports: [
    CommonModule,
    MtSizeDemoComponent
  ],
  bootstrap: [ MtSizeDemoComponent ]
})
export class MtSizeDemoModule { }
