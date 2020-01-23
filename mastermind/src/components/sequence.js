import React from 'react';
import Token from './token';

class Sequence extends React.Component {
    
    render() {    
        return (
            <div className="sequence">
                {this.props.sequence.map(color => {
                    return (<Token 
                        color={color}
                    />)
                })}
            </div>
        );
    }
}

export default Sequence;
