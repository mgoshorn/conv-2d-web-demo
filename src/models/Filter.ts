export interface IFilter {
    x: number;
    y: number;
    strides: number;
    padding: number;
}


export default function Filter(x = 5, y = 5, strides = 1, padding = 0): IFilter {
    return {
        x, y, strides, padding
    }
}
