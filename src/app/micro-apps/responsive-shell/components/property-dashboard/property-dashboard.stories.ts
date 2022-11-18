import { CommonModule } from "@angular/common";
import { NgxsModule, Store } from "@ngxs/store";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { BaseSizeWidgetModule } from "./components/base-size-widget/base-size-widget.module";
import { PropertyDashboardComponent } from "./property-dashboard.component";

export default{
    title: 'Micro Apps/Responsive Shell/Components/Property Dashboard Component',
    component: PropertyDashboardComponent,
    decorators:[
        moduleMetadata({
            declarations: [PropertyDashboardComponent],
            imports: [
                CommonModule,
                BaseSizeWidgetModule,
                Store,
                NgxsModule.forRoot()
            ]
        })
    ]
} as Meta;

const Template: Story<PropertyDashboardComponent> = (args: PropertyDashboardComponent) => ({props: args});

export const Primary = Template.bind({});