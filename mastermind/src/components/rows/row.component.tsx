import React from 'react';
import { TokenComponent } from 'components/tokens/token.component';
import { GameState } from 'components/game/game.state';
import { FeedbackComponent } from 'components/responses/feedback.component';

import 'components/rows/row.component.css';

export interface RowProps { 
    sequence: Array<string> 
    feedback?: Array<string>
};

export class RowComponent extends React.Component<RowProps, GameState> {
    
    render() { 
        return (
            <div className="game-row">
                {this.props.sequence.map((color: string, index: number) => {
                    return (<TokenComponent key={index} color={color} />);
                })}
                {(this.props.feedback && this.props.feedback.length) &&
                    <FeedbackComponent
                        feedback = {this.props.feedback}
                    />
                }
            </div>
        );
    }
}
