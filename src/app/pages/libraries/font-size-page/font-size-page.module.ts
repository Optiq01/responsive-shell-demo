import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizePageComponent } from './font-size-page.component';
import { TextSizeDemoModule } from 'src/app/demonstration-components/text-size-demo/text-size-demo.module';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { TextMeasurementModule } from 'src/app/demonstration-components/text-demos/text-measurement/text-measurement.module';
import { TextMeasurementControlModule } from 'src/app/demonstration-components/text-demos/text-measurement-control/text-measurement-control.module';



@NgModule({
  declarations: [
    FontSizePageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    TextMeasurementModule,
    TextMeasurementControlModule
  ],
  exports: [
    CommonModule,
    FontSizePageComponent
  ]
})
export class FontSizePageModule { }
