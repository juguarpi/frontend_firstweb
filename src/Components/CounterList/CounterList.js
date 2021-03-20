import React, { Component } from 'react';
import Counter from '../Counter/Counter';

class CounterList extends Component {
    state = {  }


    updateCounter=(counter, newCounter)=>{
        const {setCounters} = this.props;
        fetch('http://localhost:3001/updatecounter', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({counter:counter, newCounter:newCounter}) // body data type must match "Content-Type" header
          })
          .then(response => {
            if (response.status === 404 || response.status === 401) {
              throw Error}
            else if (response.status === 202) return response.json()})
          .then(()=>setCounters())
          .catch(err => console.log("ERROR3 updateCounter", err))
    }

    addCounter=()=>{
        const {email} = this.props;
        const counter = {email:email}
        const newCounter ="add"
        this.updateCounter(counter,newCounter);
    }

    resetCounters=()=>{
        const {email} = this.props;
        const counter = {email:email}
        const newCounter ="reset"
        this.updateCounter(counter,newCounter);
    }

    render() { 
        const {counters} = this.props;

        return ( 

            <div>
                <h1>CounterList</h1>
                <button onClick={()=>this.addCounter()}> AddNew Counter </button>
                <button onClick={()=>this.resetCounters()}> Reset Counters </button>
                {counters.map(counter =>  
                <Counter 
                counter = {counter} 
                updateCounter ={this.updateCounter}/>)}
            </div>


         );
    }
}
 
export default CounterList;