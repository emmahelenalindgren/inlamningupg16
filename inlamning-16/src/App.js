import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formular from './form.js';
import Button from './button.js';


class App extends Component {
    constructor(props) {
     super(props);
        this.state= {
            namn: "",
            email: ""
        }
        this.sparaInputnamn = this.sparaInputnamn.bind(this);
        this.sparaInputmail = this.sparaInputmail.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Formular sparaInputnamn={this.sparaInputnamn}
                  sparaInputmail={this.sparaInputmail}
                  namn={this.state.namn}
                  email={this.state.email} />
        <Button clearButton={this.clearButton} />
      </div>
    );
  }
    sparaInputnamn (event){
        let name = event.target.value;
        this.setState ({
            namn: name
        });
    }
        
    sparaInputmail(event){
        let mail = event.target.value;
        this.setState ({
            email: mail
        });
    }
    
    clearButton (){
         this.setState ({
            namn: "",
            email: ""
        });  
    }
}




export default App;
