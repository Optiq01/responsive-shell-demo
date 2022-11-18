import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveShellComponent } from './responsive-shell.component';
import { ScreenDimensionReadoutModule } from './components/screen-dimension-readout/screen-dimension-readout.module';
import { PropertyDashboardModule } from './components/property-dashboard/property-dashboard.module';
import { BaseSizeExampleModule } from './components/property-dashboard/pages/base-size-example/base-size-example.module';
import { ResponsiveWindowModule } from './components/responsive-window/responsive-window.module';
import { AnalyzerWindowModule } from './components/analyzer-window/analyzer-window.module';



@NgModule({
  declarations: [
    ResponsiveShellComponent
  ],
  imports: [
    CommonModule,
    ScreenDimensionReadoutModule,
    BaseSizeExampleModule,
    PropertyDashboardModule,
    ResponsiveWindowModule,
    AnalyzerWindowModule
  ],
  exports: [
    CommonModule,
    ResponsiveShellComponent
  ],
  bootstrap: [ResponsiveShellComponent]
})
export class ResponsiveShellModule { }
