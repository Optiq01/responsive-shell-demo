import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtSizeComponent } from './mt-size.component';



@NgModule({
  declarations: [
    MtSizeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MtSizeComponent
  ],
  bootstrap: [MtSizeComponent]
})
export class MtSizeModule { }
