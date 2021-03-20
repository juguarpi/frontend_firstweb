import React, { Component } from 'react';


class Navigation extends Component {
    state = {  }
    render() { 
        const {signinStatusChange, routeChange, signinStatus, route, name, counters} = this.props; 

        let scores = 0;
        if (counters.length> 0) {
        const scoreArray = counters.map(counter => counter.score);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        scores = scoreArray.reduce(reducer)}

        return (  

                <div className="bg-info container align-middle" style={{height : 40}}>
                <div className="row">
                    <div className="col-sm" href="#">
                        <h3 className="d-inline" >COUNTER</h3>
                    </div>
                    <div className ="col-sm text-right align-middle h6" >
                    { (signinStatus)?
                        <>
                        <div className="d-inline" > {name} &ensp; </div> 
                        <button type="button" className="btn btn-primary">
                            Counters <span className="badge badge-light"> {counters.length}</span></button>
                        <button type="button" className="btn btn-info">
                            Scores <span className="badge badge-light">{scores}</span></button> </> : ""}
                        
                        { route === "register" ?
                        <a onClick ={(event) =>{
                            event.preventDefault();
                            console.log("called onclick");
                            routeChange("sign");
                            signinStatusChange("signout")
                            }} className="badge badge-light">SIGN IN</a> : ""} 
                        
                        { (signinStatus)?
                        <a onClick ={(event) =>{
                            event.preventDefault();
                            console.log("called onclick");
                            routeChange("sign");
                            signinStatusChange("signout")
                            }} className="badge badge-light">SIGN OUT</a> : ""}

                        <a onClick ={(event) =>{
                           event.preventDefault();
                            console.log("called onclick");
                            routeChange("register");
                            signinStatusChange("signout")}} className="badge badge-light">REGISTER</a> 
                    </div>

                </div>
                </div>

         );
    }
}
 
export default Navigation;