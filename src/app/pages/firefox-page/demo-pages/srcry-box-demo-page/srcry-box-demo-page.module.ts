import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrcryBoxDemoPageComponent } from './srcry-box-demo-page.component';
import { SrcryBoxDemoModule } from 'src/app/demonstration-components/srcry-box-demo/srcry-box-demo.module';



@NgModule({
  declarations: [
    SrcryBoxDemoPageComponent
  ],
  imports: [
    CommonModule,
    SrcryBoxDemoModule
  ],
  exports: [
    CommonModule,
    SrcryBoxDemoPageComponent
  ],
  bootstrap: [ SrcryBoxDemoPageComponent ]
})
export class SrcryBoxDemoPageModule { }
