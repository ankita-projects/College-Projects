import React from "react";
import "./Form.css";

const Form = ({ submit, change }) =>{
 return(
   <div className= "form-container">
      <form onSubmit={submit}>
          <div>
      <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Ankita"
          maxLength="250"
          onChange={change}
          required
        />
        </div>
        <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Bhatnagar"
          required
          maxLength="250"
          onChange={change}
        />
        </div>
        <div>
         <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+358 9 xxx xxx"
          maxLength="13"
          onChange={change}
          required
        />
        </div>
        <div>
        <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            maxLength="1000"
            onChange={change}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role" required onChange={change}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="">None</option>
          </select>
        </div>
        <button type="submit" value ="Send">
          Submit
        </button>
      </form>
   </div>

 );
};
export default Form;