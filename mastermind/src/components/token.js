import React from 'react';
import classNames from 'classnames';
// import { getRandomArrayElement } from './random.js';
import { NEW_GAME, newGame } from '../state/actions';

import { store } from '../state/store.js';

import './token.css';

class Token extends React.Component {
    static COLORS = [ "red", "orange", "yellow", "green", "blue", "purple" ];

    constructor(props) {
        super(props);
        this.state = {
            color: store.getState().color
        }
    }

    render() {
        let className = classNames('token', this.state.color);
        
        return (
            <div 
                className={className}
                onClick={() => {
                    store.dispatch({type: NEW_GAME});
                    console.log(this.props)
                    console.log(store.getState());
                }
            } // FIXME remove when done testing
            ></div>
        );
    }
}

export default Token;
