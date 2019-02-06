export enum status {
    'progress',
    'done'
}

export interface IBook {
    id: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    status?: status
}