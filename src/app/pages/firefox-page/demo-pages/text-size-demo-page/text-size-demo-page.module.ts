import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSizeDemoPageComponent } from './text-size-demo-page.component';
import { TextSizeDemoModule } from 'src/app/demonstration-components/text-size-demo/text-size-demo.module';



@NgModule({
  declarations: [
    TextSizeDemoPageComponent
  ],
  imports: [
    CommonModule,
    TextSizeDemoModule
  ],
  exports: [
    TextSizeDemoPageComponent
  ]
})
export class TextSizeDemoPageModule { }
