import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeDemoPageModule } from './text-size-demo-page/text-size-demo-page.module';
import { SrcryBoxDemoPageModule } from './srcry-box-demo-page/srcry-box-demo-page.module';
import { LineSizeDemoPageModule } from './line-size-demo-page/line-size-demo-page.module';
import { BoxSizeDemoPageModule } from './box-size-demo-page/box-size-demo-page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SrcryBoxDemoPageModule,
    TextSizeDemoPageModule,
    LineSizeDemoPageModule,
    BoxSizeDemoPageModule
  ]
})
export class DemoPagesModule { }
