import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizeDemoPageComponent } from './line-size-demo-page.component';
import { LineSizeDemoModule } from 'src/app/demonstration-components/line-size-demo/line-size-demo.module';



@NgModule({
  declarations: [
    LineSizeDemoPageComponent
  ],
  imports: [
    CommonModule,
    LineSizeDemoModule
  ],
  exports: [
    LineSizeDemoPageComponent
  ]
})
export class LineSizeDemoPageModule { }
