import { Meta, Story } from "@storybook/angular";
import { FontSpeedComponent } from "./font-speed.component";

export default{
    title: 'Primatives/Font Speed',
    component: FontSpeedComponent
} as Meta;

const Template : Story<FontSpeedComponent> =(args: FontSpeedComponent)=>({props: args});

export const Primary = Template.bind({});