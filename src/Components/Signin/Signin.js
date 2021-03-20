import React, { Component } from 'react';
import './Signin.css'

class Signin extends Component {
    state = { 
      signInMessage:""
     }

    sign(){
    const {signinStatusChange,setNameEmail, setCounters} = this.props;
    const email = document.getElementById("inputEmailS").value;
    const password = document.getElementById("inputPasswordS").value; 
    fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({email: email, password:password}) // body data type must match "Content-Type" header
      })
      .then(response => {
        if (response.status !=200) {
           response.json()
           .then(message=> {
            this.setState({signInMessage:message})})
            .then(()=> {throw Error})
           }
        else if (response.status === 200) return response.json()})
      .then(data=> {
        setNameEmail(data[0].name, data[0].email)})
      .then(()=>{
        setCounters();
        signinStatusChange("signin");
      })
      .catch(err => console.log("ERROR1", err))
       // parses JSON response into native JavaScript objects
    }
    
    render() { 
        return ( 

            <div className="text-center m-5">
            <form className="form-signin border border-success rounded shadow-lg" >
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="text-danger"> {this.state.signInMessage} </div>
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmailS" className="form-control" placeholder="Email address" />
                <label className="sr-only">Password</label>
                <input type="password" id="inputPasswordS" className="form-control" placeholder="Password" />
                <button onClick ={(event) =>{
                    event.preventDefault();
                    this.sign()}} className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
            </div>
         );
    }
}
 
export default Signin;