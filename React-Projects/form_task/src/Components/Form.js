import React from "react";
import "./Form.css";

const Form = ({ submit, change }) =>{
 return(
   <div className= "form-container">
      <form onSubmit={submit}>
          <div>
      <label htmlFor="firstName">First Name:</label>
        <input
          onChange={change}
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ankita"
          maxLength="250"
          required
        />
        </div>
        <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={change}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Bhatnagar"
          required
          maxLength="250"
        />
        </div>
        <div>
         <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          onChange={change}
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+358 9 xxx xxx"
          maxLength="13"
          required
        />
        </div>
        <div>
        <label htmlFor="message">Message</label>
          <textarea
            onChange={change}
            name="message"
            id="message"
            maxLength="1000"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select 
          onChange={change} 
          name="role"
          id="role" 
          form = 'form'
          required >
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