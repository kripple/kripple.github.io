import React from 'react';
import classNames from 'classnames';
import { getRandomArrayElement } from '../classes/random.js';

import './token.css';

class Token extends React.Component {
    static COLORS = [ "red", "orange", "yellow", "green", "blue", "purple" ];

    constructor(props) {
        super(props);
        this.state = {
            color: props.color || getRandomArrayElement(Token.COLORS)
        }
    }

    render() {
        let className = classNames('token', this.state.color);
        
        return (
            <div 
                className={className}
                onClick={() => this.setState({color: getRandomArrayElement(Token.COLORS)})} // FIXME remove when done testing
            ></div>
        );
    }
}

export default Token;
