import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ParamOutputModule } from "../param-output/param-output.module";
import { SrcryFieldModule } from "../srcry-field/srcry-field.module";
import { BaseSizeOutputModule } from "./base-size-output/base-size-output.module";
import { BaseSizeWidgetComponent } from "./base-size-widget.component";
export default{
    title: 'Micro Apps/Responsive Shell/Components/Property Dashboard Component/Components/Base Size Widget',
    component: BaseSizeWidgetComponent,
    decorators: [
        moduleMetadata({
            declarations: [BaseSizeWidgetComponent],
            imports: [
                CommonModule,
                SrcryFieldModule,
                ParamOutputModule,
                BaseSizeOutputModule
            ]
        })
    ]
} as Meta;

const Template: Story<BaseSizeWidgetComponent> = (args: BaseSizeWidgetComponent) => ({props: args});

export const Primary = Template.bind({});

/*Primary.args = {
    Params: {prop: 'baseSize-h-nudgeAmount', value: '5'},
    ValueType: false
};*/