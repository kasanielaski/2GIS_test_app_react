import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// @ts-ignore
import md5 from 'md5';

import { fetchDataset } from '../actions/Actions';
import { CHECKSUM } from '../config';

import Header from './Header';
import BooksList from './BooksList';

const Wrapper = styled.div`
    min-width: 480px;
    max-width: 1280px;
    border: 1px solid #999;
`;

const mapDispathToProps = {
    fetchDataset
};

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        const { items } = require('../data/10_items.json');
        const hash = md5(items);
        const storedHash = localStorage.getItem(CHECKSUM);

        if (storedHash && storedHash !== hash) {
            // обнуляем стейт книг в LS
            this.props.fetchDataset(items);
            localStorage.clear();
            localStorage.setItem(CHECKSUM, hash)
        } else {
            // подтягиваем последний стейт книг из LS
            this.props.fetchDataset(items);
        }
    }

    render () {
        return (
            <Wrapper>
                <Header />
                <BooksList />
            </Wrapper>
        );
    }
};

export default connect(
    null,
    mapDispathToProps
)(App);
