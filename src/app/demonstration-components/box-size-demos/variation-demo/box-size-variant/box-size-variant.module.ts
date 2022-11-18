import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeVariantComponent } from './box-size-variant.component';



@NgModule({
  declarations: [
    BoxSizeVariantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BoxSizeVariantComponent
  ],
  bootstrap: [ BoxSizeVariantComponent ]
})
export class BoxSizeVariantModule { }
