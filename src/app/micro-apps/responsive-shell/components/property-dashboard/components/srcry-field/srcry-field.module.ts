import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryFieldComponent } from './srcry-field.component';



@NgModule({
  declarations: [
    SrcryFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SrcryFieldComponent
  ],
  bootstrap: [SrcryFieldComponent]
})
export class SrcryFieldModule { }
