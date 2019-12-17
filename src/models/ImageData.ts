import { IFilter } from './Filter';

export interface IImageData {
    data: number[][][];
    apply?: (filter: IFilter) => IImageData;
}

export default class ImageData implements IImageData {
    data: number[][][];

    constructor(data: number[][][]) {
        this.data = data;
    }

    apply(filter: IFilter): IImageData {
        return new ImageData([[[]]]);
    }
}

