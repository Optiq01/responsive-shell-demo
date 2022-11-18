import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamOutputComponent } from './param-output.component';



@NgModule({
  declarations: [
    ParamOutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ParamOutputComponent
  ],
  bootstrap: [ParamOutputComponent]
})
export class ParamOutputModule { }
