import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineSizePageComponent } from './line-size-page.component';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { LineSizeDemoModule } from 'src/app/demonstration-components/line-size-demo/line-size-demo.module';



@NgModule({
  declarations: [
    LineSizePageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    LineSizeDemoModule
  ],
  exports: [
    CommonModule,
    LineSizePageComponent
  ]
})
export class LineSizePageModule { }
