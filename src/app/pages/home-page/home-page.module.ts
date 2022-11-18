import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ResponsiveShellModule } from '../../micro-apps/responsive-shell/responsive-shell.module';
import { AnalyzerWindowModule } from 'src/app/micro-apps/responsive-shell/components/analyzer-window/analyzer-window.module';
import { PropertyDashboardModule } from 'src/app/micro-apps/responsive-shell/components/property-dashboard/property-dashboard.module';
import { NavBarModule } from './nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    AnalyzerWindowModule,
    PropertyDashboardModule,
    NavBarModule
  ],
  exports: [
    CommonModule,
    HomePageComponent
  ],
  bootstrap:[HomePageComponent]
})
export class HomePageModule { }
