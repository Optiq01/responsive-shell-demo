import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasuringTapePageComponent } from './measuring-tape-page.component';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { MtSizeDemoModule } from 'src/app/demonstration-components/mt-size-demo/mt-size-demo.module';



@NgModule({
  declarations: [
    MeasuringTapePageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    MtSizeDemoModule
  ],
  exports: [
    CommonModule,
    MeasuringTapePageComponent
  ]
})
export class MeasuringTapePageModule { }
