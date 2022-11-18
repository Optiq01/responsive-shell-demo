import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariationDemoComponent } from './variation-demo.component';
import { BoxSizeVariantModule } from './box-size-variant/box-size-variant.module';



@NgModule({
  declarations: [
    VariationDemoComponent
  ],
  imports: [
    CommonModule,
    BoxSizeVariantModule
  ],
  exports: [
    CommonModule,
    VariationDemoComponent
  ],
  bootstrap: [ VariationDemoComponent ]
})
export class VariationDemoModule { }
