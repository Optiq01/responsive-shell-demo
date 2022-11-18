import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { BaseSizeOutputComponent } from "./base-size-output.component";
export default{
    title: 'Micro Apps/Responsive Shell/Components/Property Dashboard Component/Components/Base Size Widget/Components/Base Size Output',
    component: BaseSizeOutputComponent,
    decorators: [
        moduleMetadata({
            declarations: [BaseSizeOutputComponent],
            imports: [
                CommonModule
            ]
        })
    ]
} as Meta;

const Template: Story<BaseSizeOutputComponent> = (args: BaseSizeOutputComponent) => ({props: args});

export const Primary = Template.bind({});

/*Primary.args = {
    Params: {prop: 'baseSize-h-nudgeAmount', value: '5'},
    ValueType: false
};*/