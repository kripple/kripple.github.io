import React from 'react';
import classNames from 'classnames';

import 'components/token/token.css';
import { GameState } from 'components/game/game.state';
import { TokenProps } from 'components/token/token.props';

class Token extends React.Component<TokenProps, GameState> {
    static COLORS = [ "red", "orange", "yellow", "green", "blue", "purple", "transparent" ];

    render() {
        let className = classNames('token', this.props.color);
        
        return (
            <div className={className}></div>
        );
    }
}

export default Token;
