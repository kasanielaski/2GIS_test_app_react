import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// @ts-ignore
import md5 from 'md5';

import {
    fetchDataset,
    fetchStoredState,
    clearTags,
    saveTags,
    setVisibilityFilter,
    saveVisibilityFilter
} from '../actions/Actions';
import { CHECKSUM, IN_PROGRESS, IS_DONE } from '../config';

import Header from './Header';
import BooksList from './BooksList';
import Tags from './Tags';

const Wrapper = styled.div`
    min-width: 480px;
    max-width: 1280px;
    margin: 100px auto;
    border: 1px solid #999;
`;

const mapStateToProps = (state: any) => state;

// фетчить сохраненные объект книг + теги + фильтры
const mapDispathToProps = {
    fetchDataset,
    fetchStoredState,
    clearTags,
    saveTags,
    setVisibilityFilter,
    saveVisibilityFilter
};

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        // const { items } = require('../data/10_items.json');
        fetch(
            'https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json'
        )
            .then(r => r.json())
            .then(({ items }) => {
                const hash = md5(items);
                const storedHash = localStorage.getItem(CHECKSUM);

                if (storedHash && storedHash !== hash) {
                    // обнуляем стейт книг в LS
                    this.props.fetchDataset(items);
                    localStorage.clear();
                    localStorage.setItem(CHECKSUM, hash);
                } else {
                    // подтягиваем последний стейт книг из LS
                    const booksInProgress = JSON.parse(
                        localStorage.getItem(IN_PROGRESS)!
                    );
                    const booksIsDone = JSON.parse(
                        localStorage.getItem(IS_DONE)!
                    );
                    let booksInProgressId = [];
                    let booksIsDoneId = [];

                    if (booksInProgress) {
                        booksInProgressId = JSON.parse(
                            localStorage.getItem(IN_PROGRESS)!
                        ).map(({ id }: { id: string }) => {
                            return id;
                        });
                    }

                    if (booksIsDone) {
                        booksIsDoneId = JSON.parse(
                            localStorage.getItem(IS_DONE)!
                        ).map(({ id }: { id: string }) => {
                            return id;
                        });
                    }

                    const modifiedBooksId = [
                        ...booksInProgressId,
                        ...booksIsDoneId
                    ];
                    const reducedItems = items.reduce(
                        (acc: any, item: any) =>
                            modifiedBooksId.indexOf(item.id) !== -1
                                ? acc
                                : [...acc, item],
                        []
                    );

                    reducedItems
                        ? this.props.fetchDataset(reducedItems)
                        : this.props.fetchDataset(items);
                    this.props.fetchStoredState();
                    localStorage.setItem(CHECKSUM, hash);
                }
            });
    }

    tagHandler() {
        this.props.clearTags();
        this.props.saveTags();
    }

    changeFilter(payload: string) {
        this.props.setVisibilityFilter(payload);
        this.props.saveVisibilityFilter();
    }

    render() {
        return (
            <Wrapper>
                <Header
                    toRead={this.props.dataset.length}
                    inProgress={this.props.booksInProgress.length}
                    isDone={this.props.booksIsDone.length}
                    currentFilter={this.props.visibilityFilter}
                    changeFilter={(payload: string) =>
                        this.changeFilter(payload)
                    }
                />
                {this.props.tags.length > 0 ? (
                    <Tags
                        tags={this.props.tags}
                        clearTags={() => this.tagHandler()}
                    />
                ) : null}
                <BooksList />
            </Wrapper>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(App);
