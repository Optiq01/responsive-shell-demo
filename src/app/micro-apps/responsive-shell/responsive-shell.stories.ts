import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { PropertyDashboardModule } from "./components/property-dashboard/property-dashboard.module";
import { ScreenDimensionReadoutModule } from "./components/screen-dimension-readout/screen-dimension-readout.module";
import { ResponsiveShellComponent } from "./responsive-shell.component";

export default{
    title: 'Micro Apps/Responsive Shell/Responsive Shell',
    component: ResponsiveShellComponent,
    decorators: [
        moduleMetadata({
            declarations: [ResponsiveShellComponent],
            imports: [
                CommonModule,
                ScreenDimensionReadoutModule,
                PropertyDashboardModule
            ]
        })
    ]
} as Meta;

const Template: Story<ResponsiveShellComponent> = (args: ResponsiveShellComponent) => ({props:args});

export const Primary = Template.bind({});