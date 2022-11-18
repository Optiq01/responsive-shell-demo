import { Meta, Story } from "@storybook/angular";
import { BoxSpeedComponent } from "./box-speed.component";

export default{
    title: 'Primatives/Box Speed',
    component: BoxSpeedComponent
} as Meta;

const Template : Story<BoxSpeedComponent> =(args: BoxSpeedComponent)=>({props: args});

export const Primary = Template.bind({});