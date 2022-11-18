import { Meta, Story } from "@storybook/angular";
import { ScreenDimensionReadoutComponent } from "./screen-dimension-readout.component";

export default{
    title: 'Micro Apps/Responsive Shell/Components/Screen Dimension Readout',
    component: ScreenDimensionReadoutComponent
} as Meta;

const Template: Story<ScreenDimensionReadoutComponent> = (args: ScreenDimensionReadoutComponent) => ({props: args});

export const Primary = Template.bind({});