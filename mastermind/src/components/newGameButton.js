import React from 'react';
import classNames from 'classnames';

import './newGameButton.css';

class NewGameButton extends React.Component {
    render() {
        let className = classNames('button', 'button-new-game');
        
        return (
            <button 
                className={className}
                onClick={this.props.onClick}
            >
                {this.props.displayText || 'New Game'}
            </button>
        );
    }
}

export default NewGameButton;
