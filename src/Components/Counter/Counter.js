import React, { Component } from 'react';

class Counter extends Component {
    state = {  }

    increaseCounter=(counter)=>{
        let newCounter = Object.assign({}, counter);   
        newCounter.score = counter.score +1;
        const {updateCounter} = this.props; 
        updateCounter(counter, newCounter); 
    }

    decreaseCounter=(counter)=>{ 
        let newCounter = Object.assign({}, counter);   
        newCounter.score = counter.score -1;
        const {updateCounter} = this.props; 
        updateCounter(counter, newCounter); 
       }

    deleteCounter=(counter)=>{
        let newCounter = "delete"; 
        const {updateCounter} = this.props; 
        updateCounter(counter, newCounter); 
       }   

    render() { 
        const {counter}=this.props
        return ( 
            <div>  
                <h2 className="d-inline"> {counter.score} </h2> 
                <button onClick ={() => this.increaseCounter(counter)}>Increase </button>
                <button onClick ={() => this.decreaseCounter(counter)}> Decrease </button>
                <button onClick ={() => this.deleteCounter(counter)}> Delete</button>                 
            </div>

         );
    }
}
 
export default Counter;