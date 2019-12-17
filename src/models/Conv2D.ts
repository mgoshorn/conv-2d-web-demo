import { IFilter } from './Filter';

export interface IConv2D {
    filter: IFilter;
}

export default function Conv2D(filter: IFilter): IConv2D {
    return {
        filter
    }
}

