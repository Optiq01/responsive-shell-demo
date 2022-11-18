import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeComponent } from './font-size.component';



@NgModule({
  declarations: [
    FontSizeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FontSizeComponent
  ],
  bootstrap:[FontSizeComponent]
})
export class FontSizeModule { }
