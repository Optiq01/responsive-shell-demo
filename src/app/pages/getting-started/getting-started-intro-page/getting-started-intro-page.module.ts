import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedIntroPageComponent } from './getting-started-intro-page.component';
import { ResponsiveShellModule } from 'src/app/micro-apps/responsive-shell/responsive-shell.module';
import { LineSizeDemoModule } from 'src/app/demonstration-components/line-size-demo/line-size-demo.module';



@NgModule({
  declarations: [
    GettingStartedIntroPageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveShellModule,
    LineSizeDemoModule
  ],
  exports: [
    GettingStartedIntroPageComponent
  ]
})
export class GettingStartedIntroPageModule { }
