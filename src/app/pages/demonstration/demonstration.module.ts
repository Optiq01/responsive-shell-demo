import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemonstrationComponent } from './demonstration.component';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { SizeDemoControlModule } from 'src/app/demonstration-components/box-size-demos/size-demo/size-demo-control/size-demo-control.module';
import { VariantControlModule } from 'src/app/demonstration-components/box-size-demos/variation-demo/variant-control/variant-control.module';



@NgModule({
  declarations: [
    DemonstrationComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    SizeDemoControlModule,
    VariantControlModule
  ],
  exports: [
    DemonstrationComponent
  ]
})
export class DemonstrationModule { }
