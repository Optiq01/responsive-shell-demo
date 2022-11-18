import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeBoxComponent } from './base-size-box.component';



@NgModule({
  declarations: [
    BaseSizeBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BaseSizeBoxComponent
  ],
  bootstrap: [BaseSizeBoxComponent]
})
export class BaseSizeBoxModule { }
