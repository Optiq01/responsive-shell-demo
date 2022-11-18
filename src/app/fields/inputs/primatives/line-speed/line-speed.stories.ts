import { Meta, Story } from "@storybook/angular";
import { LineSpeedComponent } from "./line-speed.component";

export default{
    title: 'Primatives/Line Speed',
    component: LineSpeedComponent
} as Meta;

const Template : Story<LineSpeedComponent> =(args: LineSpeedComponent)=>({props: args});

export const Primary = Template.bind({});