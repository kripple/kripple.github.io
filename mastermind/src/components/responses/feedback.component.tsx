import React from 'react';
import { TokenComponent } from 'components/tokens/token.component';
import { GameState } from 'components/game/game.state';
import 'components/responses/feedback.component.css';

export interface FeedbackProps { 
    feedback: Array<string>
};

export class FeedbackComponent extends React.Component<FeedbackProps, GameState> {
    
    render() {    
        
        return (
            <div className="feedback">
                {
                    this.props.feedback.map((color: string, index: number) => {
                        return (<TokenComponent key={index} color={color} />);
                    })
                }
            </div>
        );
    }
}
