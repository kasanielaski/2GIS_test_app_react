export type Status = 'progress' | 'done';

export type Visibility = '' | 'progress' | 'done';

export interface IBook {
    id: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    status?: Status
}

// export interface IModifiedBooks extends IDataset {
//     status: Status
// }