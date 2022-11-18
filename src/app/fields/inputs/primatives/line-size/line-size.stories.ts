import { Meta, Story } from "@storybook/angular";
import { LineSizeComponent } from "./line-size.component";

export default{
    title: 'Primatives/Line Size',
    component: LineSizeComponent
} as Meta;

const Template : Story<LineSizeComponent> =(args: LineSizeComponent)=>({props: args});

export const Primary = Template.bind({});