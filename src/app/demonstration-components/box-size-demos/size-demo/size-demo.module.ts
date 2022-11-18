import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeDemoComponent } from './size-demo.component';



@NgModule({
  declarations: [
    SizeDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SizeDemoComponent
  ],
  bootstrap: [ SizeDemoComponent ]
})
export class SizeDemoModule { }
