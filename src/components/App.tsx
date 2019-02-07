import React, { Component } from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import md5 from 'md5';

import { fetchDataset } from '../actions/Actions';
import { CHECKSUM } from '../config';

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
            <h1>app</h1>
        );
    }
};

export default connect(
    null,
    mapDispathToProps
)(App);
