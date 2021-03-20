import React, { Component } from 'react';
import './App.css';
import CounterList from './Components/CounterList/CounterList';
import Navigation from './Components/Navigation/Navigation'; 
import Register from './Components/Register/Register';
import Signin from './Components/Signin/Signin';

class App extends Component {
  state = { 
    signinStatus: false,
    route: "sign",
    name: "",
    email:"",
    counters:[] 
   }

  render() { 
    return (     
              <div className="App container">
              <Navigation
              routeChange = {this.routeChange}
              signinStatusChange = {this.signinStatusChange}
              signinStatus={this.state.signinStatus}
              route={this.state.route}
              name={this.state.name}
              counters={this.state.counters}
              />
              {
              this.state.route === "register" 
              ? <Register />
              : ((!this.state.signinStatus) 
                ? <Signin
                signinStatusChange = {this.signinStatusChange}
                setNameEmail={this.setNameEmail}
                setCounters ={this.setCounters}/>  
                : <CounterList
                email= {this.state.email}
                counters = {this.state.counters}
                setCounters ={this.setCounters}
                />)
              }
              </div> );
  }

  routeChange=(instruction)=>{
    console.log("Route Change called");

    if (instruction === "sign") {
      this.setState({route:"sign"});
    }
    else if (instruction === "register") {
      this.setState({route:"register"});
    }
  }

  signinStatusChange =(instruction)=>{
    if (instruction === "signin") 
    {this.setState({signinStatus:true})}
    else if (instruction === "signout") 
    {this.setState({signinStatus:false})}
  }

  setNameEmail = (name, email) =>{
    this.setState({name:name, email:email});
  }

  setCounters = () =>{
      fetch('http://localhost:3001/getcounters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({email: this.state.email}) // body data type must match "Content-Type" header
      })
      .then(response => {
        if (response.status === 404 || response.status === 401)
         {throw Error}    
        else if (response.status === 200) return response.json()})
      .then(counters=> {
        this.setState({counters:counters})})
      .catch(err => console.log("ERROR2", err))
  }

}

export default App;

