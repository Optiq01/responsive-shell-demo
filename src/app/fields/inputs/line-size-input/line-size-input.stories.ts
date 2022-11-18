import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { LineSizeModule } from "../primatives/line-size/line-size.module";
import { LineSpeedModule } from "../primatives/line-speed/line-speed.module";
import { LineSizeInputComponent } from "./line-size-input.component";

export default{
    title: 'Inputs/Line Size Input',
    component: LineSizeInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [LineSizeInputComponent],
            imports: [
                CommonModule,
                LineSizeModule,
                LineSpeedModule
            ]
        })
    ]
} as Meta;

const Template : Story<LineSizeInputComponent> =(args: LineSizeInputComponent)=>({props: args});

export const Primary = Template.bind({});