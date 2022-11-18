import { Meta, Story } from "@storybook/angular";
import { MtSizeComponent } from "./mt-size.component";

export default{
    title: 'Primatives/Mt Size',
    component: MtSizeComponent
} as Meta;

const Template : Story<MtSizeComponent> =(args: MtSizeComponent)=>({props: args});

export const Primary = Template.bind({});