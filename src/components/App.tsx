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
import { Store } from '../interfaces';

import Header from './Header';
import BooksList from './BooksList';
import Tags from './Tags';

const Wrapper = styled.div`
    min-width: 480px;
    max-width: 1280px;
    margin: 100px auto;
    border: 1px solid #999;
`;

const mapStateToProps = (state: Store) => state;

const mapDispathToProps = {
    fetchDataset,
    fetchStoredState,
    clearTags,
    saveTags,
    setVisibilityFilter,
    saveVisibilityFilter
};

class App extends Component<any> {
    constructor(props: any) {
        super(props);
        // const { items } = require('../data/10_items.json');
        fetch(
            'https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json'
        )
            .then(r => r.json())
            .then(({ items }) => {
                const { fetchDataset, fetchStoredState } = this.props;

                const hash = md5(items);
                const storedHash = localStorage.getItem(CHECKSUM);

                if (storedHash && storedHash !== hash) {
                    // обнуляем стейт книг в LS
                    fetchDataset(items);
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
                        ? fetchDataset(reducedItems)
                        : fetchDataset(items);
                    fetchStoredState();
                    localStorage.setItem(CHECKSUM, hash);
                }
            });
    }

    tagHandler() {
        const { clearTags, saveTags } = this.props;

        clearTags();
        saveTags();
    }

    changeFilter(payload: string) {
        const { setVisibilityFilter, saveVisibilityFilter } = this.props;

        setVisibilityFilter(payload);
        saveVisibilityFilter();
    }

    render() {
        const {
            dataset,
            booksInProgress,
            booksIsDone,
            visibilityFilter,
            tags
        } = this.props;

        return (
            <Wrapper>
                <Header
                    readCount={dataset.length}
                    progressCount={booksInProgress.length}
                    doneCount={booksIsDone.length}
                    currentFilter={visibilityFilter}
                    changeFilter={(payload: string) =>
                        this.changeFilter(payload)
                    }
                />
                {tags.length > 0 ? (
                    <Tags tags={tags} clearTags={() => this.tagHandler()} />
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
