import React, { Component } from 'react';
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
import { IBook } from '../interfaces';

import Book from './Book';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const EmptyList = styled.span`
    padding: 40px 0;
    margin: 0 auto;
`;

const mapStateToProps = (state: any) => state;

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

class BookList extends Component<any, any> {
    tagHandler(payload: string) {
        this.props.addTag(payload);
        this.props.saveTags();
    }

    bookHandler(book: IBook) {
        switch (book.status) {
            case undefined:
                // обработчик для книг в начальном статусе
                this.props.removeTodoBook(book.id);
                this.props.addProgressBook(book);
                this.props.saveBooks();
                break;
            case 'progress':
                // обработчик для книг в прогрессе
                this.props.removeProgressBook(book.id);
                this.props.addDoneBook(book);
                this.props.saveBooks();
                break;
            case 'done':
                // обработчик для законченных книг
                this.props.removeDoneBook(book.id);
                this.props.addTodoBook(book);
                this.props.saveBooks();
                break;
            default:
                throw new Error(`unknown book status: ${book.status}`);
        }
    }

    getCurrentList(): IBook[] {
        switch (this.props.visibilityFilter) {
            case '':
                return this.props.dataset;
            case 'progress':
                return this.props.booksInProgress;
            case 'done':
                return this.props.booksIsDone;
            default:
                throw new Error(
                    `unknown filter: ${this.props.visibilityFilter}`
                );
        }
    }

    render() {
        return (
            <Wrapper>
                {this.getCurrentList().length > 0 ? (
                    this.getCurrentList().map((book: any) => (
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
                    ))
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
