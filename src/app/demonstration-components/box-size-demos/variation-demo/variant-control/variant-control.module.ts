import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantControlComponent } from './variant-control.component';



@NgModule({
  declarations: [
    VariantControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    VariantControlComponent
  ],
  bootstrap:[ VariantControlComponent ]
})
export class VariantControlModule { }
