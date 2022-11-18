import { BoxSizeParams } from '@srcry-types';

export function CreateBoxSizeSetting(size: BoxSizeParams): string {
    if(size.size === '--'){ return '--'; }
    else{ return `${size.size}-${size.scale}-${size.speed}`; }
}