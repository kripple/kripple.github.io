import React from 'react';
import Token from 'components/token/token';
import { SequenceProps } from 'components/sequence/sequence.props';
import { GameState } from 'components/game/game.state';

class Sequence extends React.Component<SequenceProps, GameState> {
    
    render() {    
        return (
            <div className="sequence">
                {this.props.sequence.map((color: string, index: number) => {
                    return (<Token key={index} color={color} />);
                })}
            </div>
        );
    }
}

export default Sequence;
