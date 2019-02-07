export type Status = 'progress' | 'done';

export type Visibility = '' | 'progress' | 'done';

export interface IDataset {
    id: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
}

export interface IModifiedBooks extends IDataset {
    status: Status
}