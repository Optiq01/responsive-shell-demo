import { LineSizeParams } from "../fields/inputs/line-size-input/line-size-input.component";

export function CreateLineSizeSetting(size: LineSizeParams): string {
    return `line-${size.size}-${size.speed}`;
}