import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MtSizeModule } from "../inputs/primatives/mt-size/mt-size.module";
import { CrushGapFieldComponent } from "./crush-gap-field.component";

export default{
    title: 'Fields/Crush Gap Field',
    component: CrushGapFieldComponent,
    decorators: [
        moduleMetadata({
            declarations: [CrushGapFieldComponent],
            imports: [
                CommonModule,
                MtSizeModule
            ]
        })
    ]
} as Meta;

const Template : Story<CrushGapFieldComponent> =(args: CrushGapFieldComponent)=>({props: args});

export const Primary = Template.bind({});