import React, { Component } from 'react';

class Register extends Component {
    state = { 
        registrationMessage:""
       }
    
    register(){
        const name = document.getElementById("inputNameR").value;
        const email = document.getElementById("inputEmailR").value;
        const password = document.getElementById("inputPasswordR").value; 
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({name: name, email: email, password:password}) // body data type must match "Content-Type" header
          })
          .then(response => response.json())
          .then(message => this.setState({registrationMessage:message}))
        }

    render() { 
        
        return (             
        <div className="text-center m-5">
        <form className="form-signin border border-success rounded shadow-lg" >
            <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
            <div className="text-danger"> {this.state.registrationMessage} </div>
            <label className="sr-only">Email address</label>
            <input type="name" id="inputNameR" className="form-control" placeholder="Name" />
            <label className="sr-only">Email address</label>
            <input type="email" id="inputEmailR" className="form-control" placeholder="Email address" />
            <label className="sr-only">Password</label>
            <input type="password" id="inputPasswordR" className="form-control" placeholder="Password" />
            <button onClick ={(event) =>{
                    event.preventDefault();
                    this.register()}} className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
        </div> );
    }
}
 
export default Register;