import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { BoxScaleModule } from "../primatives/box-scale/box-scale.module";
import { BoxSizeModule } from "../primatives/box-size/box-size.module";
import { BoxSpeedModule } from "../primatives/box-speed/box-speed.module";
import { BoxSizeInputComponent } from "./box-size-input.component";

export default{
    title: 'Inputs/Box Size Input',
    component: BoxSizeInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [BoxSizeInputComponent],
            imports: [
                CommonModule,
                BoxSizeModule,
                BoxScaleModule,
                BoxSpeedModule
            ]
        })
    ]
} as Meta;

const Template : Story<BoxSizeInputComponent> =(args: BoxSizeInputComponent)=>({props: args});

export const Primary = Template.bind({});