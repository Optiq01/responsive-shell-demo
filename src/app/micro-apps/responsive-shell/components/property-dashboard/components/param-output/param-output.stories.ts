import { Meta, Story } from "@storybook/angular";
import { ParamOutputComponent } from "./param-output.component";

export default{
    title: 'Micro Apps/Responsive Shell/Components/Property Dashboard Component/Components/Param Output',
    component: ParamOutputComponent
} as Meta;

const Template: Story<ParamOutputComponent> = (args: ParamOutputComponent) => ({props: args});

export const Primary = Template.bind({});

Primary.args = {
    /*Params: {prop: 'baseSize-h-nudgeAmount', value: '5'},
    ValueType: false*/
};