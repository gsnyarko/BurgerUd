import React, {Component} from 'react';
<<<<<<< HEAD
import  './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
=======
import './App.css';
import Output from './UserOutput';
import Input from './UserInput';
>>>>>>> e713201e9377267b495ead6502040d23c01dc7a7

class App extends Component {
  state = {username: 'Gideon'}


  changeUsername = (e) => {
    this.setState({username: e.target.value})
  }

  
  render() {
    return (
<<<<<<< HEAD
      <div>
       
    <Layout>
    <BurgerBuilder />

    </Layout>
    
=======
      <div className="App">
  
        <Input  changed={this.changeUsername}/>
        <Output userName={this.state.username}  />
        <Output userName={this.state.username}   />
        <Output userName='obinim'   />
        
>>>>>>> e713201e9377267b495ead6502040d23c01dc7a7
      </div>
    );
  }
  

  }
  
export default App;
