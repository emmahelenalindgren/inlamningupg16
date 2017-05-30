import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
        <div>
            <button onClick={this.props.clearButton} className="buttonClass">CLEAR</button>
        </div>
        );
    }
}

export default Button;