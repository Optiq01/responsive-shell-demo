import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeOutputComponent } from './size-output.component';



@NgModule({
  declarations: [
    SizeOutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SizeOutputComponent
  ],
  bootstrap:[SizeOutputComponent]
})
export class SizeOutputModule { }
