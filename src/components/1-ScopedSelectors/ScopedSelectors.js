import styles from './ScopedSelectors.css';
import React, { Component } from 'react';

export default class ScopedSelectors extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            click: 0
        };
    }
    onClick() {
        console.debug('click');
        this.setState({click: this.state.click + 1});
    }
    render() {
        return (
                <div className={ styles.root }>
                <p className={ styles.body } onClick={this.onClick.bind(this)}>body</p>
                <p className={ styles.text }>text</p>
                </div>
        );
    }
};
