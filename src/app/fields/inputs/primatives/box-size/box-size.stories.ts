import { Meta, Story } from "@storybook/angular";
import { BoxSizeComponent } from "./box-size.component";

export default{
    title: 'Primatives/Box Size',
    component: BoxSizeComponent
} as Meta;

const Template : Story<BoxSizeComponent> =(args: BoxSizeComponent)=>({props: args});

export const Primary = Template.bind({});