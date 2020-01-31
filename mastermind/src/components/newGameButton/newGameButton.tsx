import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { GameState } from 'components/game/game.state';
import { NewGameButtonProps } from 'components/newGameButton/newGameButton.props';
import 'components/newGameButton/newGameButton.css';


class NewGameButton extends React.Component<NewGameButtonProps, GameState> {
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


