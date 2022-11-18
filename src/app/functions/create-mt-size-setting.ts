export function CreateMtSize(size: string): string {
    if(size === '--'){ return size; }
    else{ return `mt-${size}`; }
}