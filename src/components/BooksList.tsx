import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTag, saveTags } from '../actions/Actions';
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
    saveTags: () => dispatch(saveTags())
});

class BookList extends Component<any, any> {
    tagHandler(payload: string) {
        this.props.addTag(payload);
        this.props.saveTags();
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
