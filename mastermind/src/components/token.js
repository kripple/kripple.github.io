import React from 'react';
import { getRandomObjectElement } from '../classes/random.js';

import './token.css';

class Token extends React.Component {
    constructor(props) {
        super();
        this.color = props.color || getRandomObjectElement(Token.COLORS);
    }

    render() {
        return (
            <div className={`token ${this.color.className}`}></div>
        );
    }
}

Token.COLORS = {
    RED: {
        hexCode: "#FF0000",
        className: "red"
    },
    ORANGE: {
        hexCode: "#FF7400",
        className: "orange"
    },
    YELLOW: {
        hexCode: "#FFE900",
        className: "yellow"
    },
    GREEN: {
        hexCode: "#00FF00",
        className: "green"
    },
    BLUE: {
        hexCode: "#00FFFF",
        className: "blue"
    },
    PURPLE: {
        hexCode: "#5709B8",
        className: "purple"
    }
}

export default Token;
