import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
  state = {
    persons: [
      {
        name: "Ankita",
        age: 36,
        title: "CEO",
      },
      {
        name: "Theo",
        age: 35,
        title: "des",
      },
      {
        name: "Leo",
        age: 32,
        title: "scrum",
      },
    ],
  };
  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Laila",
          age: 36,
          title: "CEO",
        },
        {
          name: "Anika",
          age: 35,
          title: "des",
        },
        {
          name: "Lilja",
          age: 32,
          title: "scrum",
        },
      ],
    });
  };
  render() {
    return (
      <main>
        <button onClick={this.handleClick}>Click me from main</button>
        <BoxCard
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <BoxCard
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <BoxCard
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}


export default BoxesList;