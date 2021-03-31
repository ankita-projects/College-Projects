
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state ={
    counter :0,
  };
  addHandler = ()=>{
      this.setState({counter: this.state.counter + 1});
  };
  removeHandler = ()=>{
    if(this.state.counter > 0){
    this.setState({counter: this.state.counter - 1 });
    }
  };
  resetHandler = ()=>{
     this.setState({counter:0});
        };
  render(){
    let circleClass =`circle ${
      this.state.counter === 0
       ? ""
       :this.state.counter % 2 ===0
       ? "even"
       : "odd"
    }`;
    let today = new Date();

     return (
   <div className="App">
     <Header date = {today.toDateString()} />
     <main>
       <div className ={circleClass}>{this.state.counter}</div>
       <button onClick ={this.addHandler} className ="add">Add one
       </button>
       <button onClick ={this.removeHandler} className ="remove">Remove one
       </button>
        <button onClick ={this.resetHandler} className ="reset">Reset
       </button>
     </main>
     <Footer year={today.getFullYear()} />
   </div>
  );
}
}

export default App;
