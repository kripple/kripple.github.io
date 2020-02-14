import React from 'react';
import { TokenComponent } from 'components/tokenComponent/token.component';
import { GameState } from 'state/game.state';

export interface SequenceProps { 
    sequence: Array<string> 
};

export class SequenceComponent extends React.Component<SequenceProps, GameState> {
    
    render() {    
        return (
            <div className="sequence">
                {this.props.sequence.map((color: string, index: number) => {
                    return (<TokenComponent key={index} color={color} />);
                })}
            </div>
        );
    }
}
