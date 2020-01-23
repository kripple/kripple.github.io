import React from 'react';
import classNames from 'classnames';

import './token.css';

class Token extends React.Component {
    static COLORS = [ "red", "orange", "yellow", "green", "blue", "purple", "transparent" ];

    render() {
        let className = classNames('token', this.props.color);
        
        return (
            <div className={className}></div>
        );
    }
}

export default Token;
