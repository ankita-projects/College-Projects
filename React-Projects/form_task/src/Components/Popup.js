import React from "react";
import "./Popup.css";

const closeHandler = () => {
	window.location.reload();
  };
const Popup = ({
	firstName,
	lastName,
	phoneNumber,
	role,
	message,
	backBtn,
	submit,
}) => {
  return (
    <div className="popup-container">
      <div className="popup">
      <h2>Confirm Your Details</h2>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>Phone Number: {phoneNumber}</p>
				<p>Role: {role}</p>
				<p>Message: {message}</p>

				<button type='submit' onClick={submit} className='submit-btn'>
					Send
				</button>
				<button
					type='button'
					onClick={closeHandler}
					className='secondary'
				>
			   Back
				</button>
      </div>
    </div>
  );
};

export default Popup;
