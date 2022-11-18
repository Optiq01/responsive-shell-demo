import { Meta, Story } from "@storybook/angular";
import { NudgeAmountComponent } from "./nudge-amount.component";

export default{
    title: 'Primatives/Nudge Amount',
    component: NudgeAmountComponent
} as Meta;

const Template : Story<NudgeAmountComponent> =(args: NudgeAmountComponent)=>({props: args});

export const Primary = Template.bind({});