import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSizePageComponent } from './box-size-page.component';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { SizeDemoControlModule } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo-control/size-demo-control.module';
import { VariationDemoModule } from 'src/app/demonstration-components/box-size-demos/variation-demo/variation-demo.module';
import { BoxSizeVariantModule } from 'src/app/demonstration-components/box-size-demos/variation-demo/box-size-variant/box-size-variant.module';
import { VariantControlModule } from 'src/app/demonstration-components/box-size-demos/variation-demo/variant-control/variant-control.module';
import { SizeChartModule } from 'src/app/demonstration-components/size-chart/size-chart.module';



@NgModule({
  declarations: [
    BoxSizePageComponent
  ],
  imports: [
    CommonModule,
    SizeDemoControlModule,
    ResponsiveShellModule,
    BoxSizeVariantModule,
    VariationDemoModule,
    VariantControlModule,
    SizeChartModule
  ],
  exports: [
    CommonModule,
    BoxSizePageComponent
  ],
  bootstrap: [ BoxSizePageComponent ]
})
export class BoxSizePageModule { }
