import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSizeExampleComponent } from './base-size-example.component';
import { BaseSizeBoxModule } from './base-size-box/base-size-box.module';
import { SrcryBoxReaderModule } from './srcry-box-reader/srcry-box-reader.module';



@NgModule({
  declarations: [
    BaseSizeExampleComponent
  ],
  imports: [
    CommonModule,
    BaseSizeBoxModule,
    SrcryBoxReaderModule
  ],
  exports: [
    CommonModule,
    BaseSizeExampleComponent
  ],
  bootstrap: [BaseSizeExampleComponent]
})
export class BaseSizeExampleModule { }
