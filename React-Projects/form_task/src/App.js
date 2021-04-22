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


   changeHandler = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.id]: event.target.value },
    });
  };

  popupHandler = (event) => {
    this.setState({ showPopup: true });
    event.preventDefault();
  };

  closePopupHandler = () => {
		this.setState({ showPopup: false });
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
			
						backBtn={this.closePopupHandler}
					/>
				)}
			</div>
		);
	}
}

export default App;