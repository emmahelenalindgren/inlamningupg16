import React, { Component } from 'react';

class Formular extends Component {
    render(){
        return(
        <div>
            <input type="text" placeholder="Namn" className="inputNamn" />
            <input type="text" placeholder="Email" className="inputEmail" />
        </div>
        );
    }
}

export default Formular;