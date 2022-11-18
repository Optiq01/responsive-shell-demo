import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryBoxReaderComponent } from './srcry-box-reader.component';



@NgModule({
  declarations: [
    SrcryBoxReaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SrcryBoxReaderComponent
  ],
  bootstrap:[SrcryBoxReaderComponent]
})
export class SrcryBoxReaderModule { }
