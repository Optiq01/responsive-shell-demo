import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizeDemoPageComponent } from './box-size-demo-page.component';
import { SizeDemoModule } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo.module';



@NgModule({
  declarations: [
    BoxSizeDemoPageComponent
  ],
  imports: [
    CommonModule,
    SizeDemoModule
  ],
  exports: [
    BoxSizeDemoPageComponent
  ]
})
export class BoxSizeDemoPageModule { }
