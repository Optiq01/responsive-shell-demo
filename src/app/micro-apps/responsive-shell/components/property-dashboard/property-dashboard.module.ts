import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDashboardComponent } from './property-dashboard.component';
import { SrcryFieldModule } from './components/srcry-field/srcry-field.module';
import { BaseSizeWidgetModule } from './components/base-size-widget/base-size-widget.module';
import { CrushGapWidgetModule } from './components/crush-gap-widget/crush-gap-widget.module';
import { EdgeChaseWidgetModule } from './components/edge-chase-widget/edge-chase-widget.module';
import { ChaseStopWidgetModule } from './components/chase-stop-widget/chase-stop-widget.module';
import { SquishGrowthWidgetModule } from './components/squish-growth-widget/squish-growth-widget.module';
import { StretchShrinkWidgetModule } from './components/stretch-shrink-widget/stretch-shrink-widget.module';



@NgModule({
  declarations: [
    PropertyDashboardComponent
  ],
  imports: [
    CommonModule,
    //SrcryFieldModule,
    BaseSizeWidgetModule,
    CrushGapWidgetModule,
    EdgeChaseWidgetModule,
    ChaseStopWidgetModule,
    SquishGrowthWidgetModule,
    StretchShrinkWidgetModule
  ],
  exports: [
    CommonModule,
    PropertyDashboardComponent
  ],
  bootstrap: [
    PropertyDashboardComponent
  ]
})
export class PropertyDashboardModule { }
