import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

import './newGameButton.css';

class NewGameButton extends React.Component {
    render() {
        let className = classNames('button', 'button-new-game');
        
        return (
            <Button 
                className={className}
                onClick={this.props.onClick}
            >
                {this.props.displayText || 'New Game'}
            </Button>
        );
    }
}

export default NewGameButton;
