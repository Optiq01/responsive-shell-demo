import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { SrcryBoxState } from 'src/shared/states/srcry-box/srcry-box.state';
import { BaseSizeState } from 'src/shared/states/srcry-box/sub-states/base-size/base-size.state';
import { ChaseStopState } from 'src/shared/states/srcry-box/sub-states/chase-stop/chase-stop.state';
import { CrushGapState } from 'src/shared/states/srcry-box/sub-states/crush-gap/crush-gap.state';
import { EdgeChaseState } from 'src/shared/states/srcry-box/sub-states/edge-chase/edge-chase.state';
import { SquishGrowthState } from 'src/shared/states/srcry-box/sub-states/squish-growth/squish-growth.state';
import { StretchShrinkState } from 'src/shared/states/srcry-box/sub-states/stretch-shrink/stretch-shrink.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldsModule } from './fields/fields.module';
import { ResponsiveShellModule } from './micro-apps/responsive-shell/responsive-shell.module';
import { SrcryBoxDemoPageModule } from './pages/firefox-page/demo-pages/srcry-box-demo-page/srcry-box-demo-page.module';
import { PagesModule } from './pages/pages.module';
import { DemoPagesModule } from './pages/firefox-page/demo-pages/demo-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(
      [
        SrcryBoxState,
        CrushGapState,
        BaseSizeState,
        EdgeChaseState,
        ChaseStopState,
        SquishGrowthState,
        StretchShrinkState
      ],
      {
        developmentMode: true,
        selectorOptions:{
          suppressErrors: false,
          injectContainerState: false
        }
      }
    ),
    FieldsModule,
    PagesModule,
    //ResponsiveShellModule,
    DemoPagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
