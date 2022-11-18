import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryBoxDemoComponent } from './srcry-box-demo.component';



@NgModule({
  declarations: [
    SrcryBoxDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SrcryBoxDemoComponent
  ],
  bootstrap: [ SrcryBoxDemoComponent ]
})
export class SrcryBoxDemoModule { }
