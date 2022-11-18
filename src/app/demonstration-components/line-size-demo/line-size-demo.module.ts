import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeDemoComponent } from './line-size-demo.component';
import { LineSizeDisplayModule } from './line-size-display/line-size-display.module';



@NgModule({
  declarations: [
    LineSizeDemoComponent
  ],
  imports: [
    CommonModule,
    LineSizeDisplayModule
  ],
  exports: [
    CommonModule,
    LineSizeDemoComponent
  ],
  bootstrap: [ LineSizeDemoComponent ]
})
export class LineSizeDemoModule { }
