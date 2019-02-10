export type BookStatus = 'progress' | 'done';

export type Visibility = '' | 'progress' | 'done';

export interface IBook {
    id: string;
    author: string;
    title: string;
    description: string;
    tags: string[];
    status?: BookStatus;
}

export interface Store {
    booksInProgress: IBook[];
    booksIsDone: IBook[];
    dataset: IBook[];
    tags: string[];
    visibilityFilter: Visibility;
}
