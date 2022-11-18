import { Meta, Story } from "@storybook/angular";
import { SrcryFieldComponent } from "./srcry-field.component";

export default{
    title: 'Micro Apps/Responsive Shell/Components/Property Dashboard Component/Components/SRCRY Field',
    component: SrcryFieldComponent
} as Meta;

const Template: Story<SrcryFieldComponent> = (args: SrcryFieldComponent) => ({props: args});

export const Primary = Template.bind({});

Primary.args = {
    Param: 'baseSize-h-nudgeAmount',
    Value: '5',
    ValueType: false
};