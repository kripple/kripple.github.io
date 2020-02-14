import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { GameState } from 'state/game.state';

export interface ButtonProps { 
    displayText?: string 
};

export class ButtonComponent extends React.Component<ButtonProps, GameState> {
    render() {
        let className = classNames('button', 'button-new-game');
        
        return (
            <Button 
                className={className}
                // onClick={this.props.onClick}
            >
                {this.props.displayText || 'Clicky'}
            </Button>
        );
    }
}
