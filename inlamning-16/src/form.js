import React, { Component } from 'react';

class Formular extends Component {
    render(){
        return(
        <div>
            <input value={this.props.namn} onChange={this.props.sparaInputnamn} type="text" placeholder="Namn" className="inputNamn" />
            <input value={this.props.email} onChange={this.props.sparaInputmail} type="text" placeholder="Email" className="inputEmail" />
        </div>
        );
    }
}

export default Formular;