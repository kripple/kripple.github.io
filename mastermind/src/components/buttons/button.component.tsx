import React, { Component, MouseEvent } from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { GameState } from 'components/game/game.state';
import { PayloadTypes } from 'state/actions';

export interface ButtonProps { 
    displayText: string,
    dispatchOnClick: (payload: PayloadTypes) => void,
    params: PayloadTypes
};

export class ButtonComponent extends Component<ButtonProps, GameState> {

    onClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        this.props.dispatchOnClick(this.props.params)
    }

    render() {
        let className = classNames('button');
        
        return (
            <Button 
                variant="outline-light"
                className={className}
                onClick={this.onClick}
            >
                {this.props.displayText}
            </Button>
        );
    }
}
