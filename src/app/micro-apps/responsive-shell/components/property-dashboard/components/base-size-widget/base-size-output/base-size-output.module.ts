import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeOutputComponent } from './base-size-output.component';
import { ParamOutputModule } from '../../param-output/param-output.module';



@NgModule({
  declarations: [
    BaseSizeOutputComponent
  ],
  imports: [
    CommonModule,
    ParamOutputModule
  ],
  exports: [
    CommonModule,
    BaseSizeOutputComponent
  ],
  bootstrap: [BaseSizeOutputComponent]
})
export class BaseSizeOutputModule { }
