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

export interface IStore {
    booksInProgress: IBook[];
    booksIsDone: IBook[];
    dataset: IBook[];
    tags: string[];
    visibilityFilter: Visibility;
}

export interface IAppProps extends IStore {
    fetchDataset(payload: IBook[]): void;
    fetchStoredState(): void;
    clearTags(): void;
    saveTags(): void;
    setVisibilityFilter(payload: Visibility): void;
    saveVisibilityFilter(): void;
}

export interface IBooksListProps extends IStore {
    addTag(payload: string): void;
    saveTags(): void;
    addTodoBook(payload: IBook): void;
    removeTodoBook(payload: string): void;
    addProgressBook(payload: IBook): void;
    removeProgressBook(payload: string): void;
    addDoneBook(payload: IBook): void;
    removeDoneBook(payload: string): void;
    saveBooks(): void;
}
