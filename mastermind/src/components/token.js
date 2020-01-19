import React from 'react';
import classNames from 'classnames';
import { getRandomArrayElement } from './random.js';

import './token.css';
import { doTheAction } from '../state/actions.js';
import { store } from '../state/store.js';

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
                onClick={() => {
                    store.getState();
                    const action = doTheAction('testing');
                    store.dispatch(action);
                    store.getState();
                    return this.setState({color: getRandomArrayElement(Token.COLORS)});
                }
            } // FIXME remove when done testing
            ></div>
        );
    }
}

export default Token;
