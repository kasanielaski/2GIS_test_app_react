import React, { Component } from 'react';
import intersection from 'lodash/intersection';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    addTag,
    saveTags,
    addTodoBook,
    removeTodoBook,
    addProgressBook,
    removeProgressBook,
    addDoneBook,
    removeDoneBook,
    saveBooks
} from '../actions/Actions';
import { IBook, Store } from '../interfaces';

import Book from './Book';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const EmptyList = styled.span`
    padding: 40px 0;
    margin: 0 auto;
`;

const mapStateToProps = (state: Store) => state;

const mapDispatchToProps = (dispatch: any) => ({
    addTag: (payload: string) => dispatch(addTag(payload)),
    saveTags: () => dispatch(saveTags()),
    addTodoBook: (payload: IBook) => dispatch(addTodoBook(payload)),
    removeTodoBook: (payload: string) => dispatch(removeTodoBook(payload)),
    addProgressBook: (payload: IBook) => dispatch(addProgressBook(payload)),
    removeProgressBook: (payload: string) =>
        dispatch(removeProgressBook(payload)),
    addDoneBook: (payload: IBook) => dispatch(addDoneBook(payload)),
    removeDoneBook: (payload: string) => dispatch(removeDoneBook(payload)),
    saveBooks: () => dispatch(saveBooks())
});

class BookList extends Component<any> {
    tagHandler(payload: string): void {
        const { addTag, saveTags } = this.props;

        addTag(payload);
        saveTags();
    }

    bookHandler(book: IBook): void {
        const {
            removeTodoBook,
            addProgressBook,
            removeProgressBook,
            addDoneBook,
            removeDoneBook,
            addTodoBook,
            saveBooks
        } = this.props;

        switch (book.status) {
            case undefined:
                // обработчик для книг в начальном статусе
                removeTodoBook(book.id);
                addProgressBook(book);
                saveBooks();
                break;
            case 'progress':
                // обработчик для книг в прогрессе
                removeProgressBook(book.id);
                addDoneBook(book);
                saveBooks();
                break;
            case 'done':
                // обработчик для законченных книг
                removeDoneBook(book.id);
                addTodoBook(book);
                saveBooks();
                break;
            default:
                throw new Error(`unknown book status: ${book.status}`);
        }
    }

    getCurrentList(): IBook[] {
        const {
            visibilityFilter,
            dataset,
            booksInProgress,
            booksIsDone
        } = this.props;

        switch (visibilityFilter) {
            case '':
                return dataset;
            case 'progress':
                return booksInProgress;
            case 'done':
                return booksIsDone;
            default:
                throw new Error(`unknown filter: ${visibilityFilter}`);
        }
    }

    render() {
        return (
            <Wrapper>
                {this.getCurrentList().length > 0 ? (
                    this.getCurrentList().reduce(
                        (acc: any, book) =>
                            intersection(book.tags, this.props.tags).length ===
                            this.props.tags.length
                                ? [
                                      ...acc,
                                      <Book
                                          key={book.id}
                                          addTag={(payload: string) =>
                                              this.tagHandler(payload)
                                          }
                                          changeStatus={(book: IBook) =>
                                              this.bookHandler(book)
                                          }
                                          {...book}
                                      />
                                  ]
                                : acc,
                        []
                    )
                ) : (
                    <EmptyList>List is empty</EmptyList>
                )}
            </Wrapper>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);
