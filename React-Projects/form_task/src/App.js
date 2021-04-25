import React, { Component } from "react";


import Form from "./Components/Form";
import View from "./Components/View";
import Popup from "./Components/Popup";
import NotesList from "./Components/NotesList";


class App extends Component {
  state = {
    form: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			role: "",
			message: "",
		},
		showPopup: false,
		notes: [],
	};

	componentDidMount() {
		fetch("http://localhost:3002/notes")
		  .then((response) => response.json())
		  .then((data) => this.setState({ notes: data }));
	  }
	

   changeHandler = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.id]: event.target.value },
    });
  };

  popupHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.form),
    };

    fetch("http://localhost:3002/notes", requestOptions);
    alert("Note is posted",window.location.reload());
	
  };
  

  render() {
		return (
			<div className='container'>
				<main>
					<Form change={this.changeHandler} submit={this.popupHandler} />
					<View {...this.state.form} />
					<NotesList notes={this.state.notes} />
				</main>
				{this.state.showPopup && (
					<Popup
						{...this.state.form}
			
						backBtn={this.closeHandler}
						submit = {this.sendDataHandler}
					/>
				)}
			</div>
		);
	}
}

export default App;