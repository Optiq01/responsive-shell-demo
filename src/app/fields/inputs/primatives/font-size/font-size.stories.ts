import { Meta, Story } from "@storybook/angular";
import { FontSizeComponent } from "./font-size.component";

export default{
    title: 'Primatives/Font Size',
    component: FontSizeComponent
} as Meta;

const Template : Story<FontSizeComponent> =(args: FontSizeComponent)=>({props: args});

export const Primary = Template.bind({});