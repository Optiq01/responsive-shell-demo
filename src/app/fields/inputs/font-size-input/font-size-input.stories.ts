import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { FontSizeModule } from "../primatives/font-size/font-size.module";
import { FontSpeedModule } from "../primatives/font-speed/font-speed.module";
import { FontSizeInputComponent } from "./font-size-input.component";

export default{
    title: 'Inputs/Font Size Input',
    component: FontSizeInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [FontSizeInputComponent],
            imports: [
                CommonModule,
                FontSizeModule,
                FontSpeedModule
            ]
        })
    ]
} as Meta;

const Template : Story<FontSizeInputComponent> =(args: FontSizeInputComponent)=>({props: args});

export const Primary = Template.bind({});