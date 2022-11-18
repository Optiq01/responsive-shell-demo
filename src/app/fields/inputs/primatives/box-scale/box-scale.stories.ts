import { Meta, Story } from "@storybook/angular";
import { BoxScaleComponent } from "./box-scale.component";

export default{
    title: 'Primatives/Box Scale',
    component: BoxScaleComponent
} as Meta;

const Template: Story<BoxScaleComponent> = (args:BoxScaleComponent)=>({props:args});

export const Primary = Template.bind({});