import React, { Component } from 'react';
// @ts-ignore
import md5 from 'md5';

import { CHECKSUM } from '../config';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    async componentWillMount() {
        const { items }= await require('../data/10_items.json');
        const hash = md5(items);
        const storedHash = localStorage.getItem(CHECKSUM);

        if (storedHash && storedHash !== hash) {
            // обнуляем стейт
            localStorage.setItem(CHECKSUM, hash)
        }
    }

    render () {
        return (
            <h1>app</h1>
        );
    }
};

export default App;
