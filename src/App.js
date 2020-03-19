import React, {Component} from 'react';
import './App.css';
import Output from './UserOutput';
import Input from './UserInput';

class App extends Component {
  state = {username: 'Gideon'}


  changeUsername = (e) => {
    this.setState({username: e.target.value})
  }

  
  render() {
    return (
      <div className="App">
  
        <Input  changed={this.changeUsername}/>
        <Output userName={this.state.username}  />
        <Output userName={this.state.username}   />
        <Output userName='obinim'   />
        
      </div>
    );
  }
  

  }
  
export default App;
