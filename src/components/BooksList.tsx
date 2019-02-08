import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTag } from '../actions/Actions';

import Book from './Book';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = (state:any) => state;

const mapDispatchToProps = {
    addTag
}

// const mapDispatchToProps = (dispatch: any) => ({
//     addTag: (payload: string) => dispatch(addTag(payload))
// });

class BookList extends Component<any, any>{
    render () {
        let currentList;
        switch (this.props.visibilityFilter) {
            case '':
                currentList = this.props.dataset;
                break;
            case 'progress':
                currentList = this.props.booksInProgress;
                break;
            case 'done':
                currentList =  this.props.booksIsDone;
                break;
            default:
                throw new Error('unknown filter');
        }

        return (
            <Wrapper>
                {currentList.map((book: any) =>
                    <Book
                        key={book.id}
                        {...book}
                        addTag={addTag}
                    />
                )}
            </Wrapper>
        );
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(BookList);