import React from 'react';
import classNames from 'classnames';

import 'components/tokenComponent/token.component.css';
import { GameState } from 'state/game.state';

export interface TokenProps { 
    color: string 
};

export class TokenComponent extends React.Component<TokenProps, GameState> {
    
    render() {
        let className = classNames('token', this.props.color);
        
        return (
            <div className={className}></div>
        );
    }
}
