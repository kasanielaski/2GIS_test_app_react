export type Status = 'progress' | 'done';

export interface IDataset {
    id: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
}