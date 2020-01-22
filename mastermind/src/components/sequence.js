import React from 'react';
import Token from './token';

class Sequence extends React.Component {
    
    render() {    
        return (
            <div className="sequence">
                <Token 
                    color={this.props.sequence[0]}
                />
                <Token 
                    color={this.props.sequence[1]}
                />
                <Token 
                    color={this.props.sequence[2]}
                />
                <Token 
                    color={this.props.sequence[3]}
                />
            </div>
        );
    }
}

export default Sequence;
