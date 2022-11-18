import { FontSizeParams } from "@srcry-types";


export function CreateFontSize(size: FontSizeParams): string { return `${size.size}-${size.speed}`; }