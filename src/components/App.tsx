import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// @ts-ignore
import md5 from 'md5';

import {
    fetchDataset,
    clearTags,
    saveTags,
    fetchTags,
    setVisibilityFilter,
    saveVisibilityFilter,
    fetchVisibilityFilter
} from '../actions/Actions';
import { CHECKSUM } from '../config';

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
    clearTags,
    saveTags,
    fetchTags,
    setVisibilityFilter,
    saveVisibilityFilter,
    fetchVisibilityFilter
};

class App extends Component<any, any> {
    componentWillMount() {
        const { items } = require('../data/10_items.json');
        const hash = md5(items);
        const storedHash = localStorage.getItem(CHECKSUM);

        if (storedHash && storedHash !== hash) {
            // обнуляем стейт книг в LS
            this.props.fetchDataset(items);
            localStorage.clear();
            localStorage.setItem(CHECKSUM, hash);
        } else {
            // подтягиваем последний стейт книг из LS
            this.props.fetchTags();
            // this.props.fetchVisibilityFilter();
            this.props.fetchDataset(items);
            localStorage.setItem(CHECKSUM, hash);
        }
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
