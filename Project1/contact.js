import React from 'react'
import {useState} from "react"

const Contact = function() {
    //set state
  const [inputs, setInputs] = useState({});
  const [myGender, setGender] = useState('female');
  const [textComments, setTextArea] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  //input data
  const handleChange = function(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({
      ...values,
      [name]: value
    }));
  };
// select data
  const selectedGender = function(event) {
    setGender(event.target.value);
  };

  const submitComment = function(event) {
    setTextArea(event.target.value);
  };
 //submit form
  const handleSubmit = function(event) {
    event.preventDefault();
    const submittedData = {
      name: inputs.username,
      age: inputs.enteredAge,
      gender: myGender,
      comments: textComments
    };
    setSubmittedData(submittedData);
  };

  return (
    <div>
      <form className="ui form"  onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form in ReactJS</legend>
          <label>Enter your name:</label>
          <input
            type="text"
            placeholder="Type your name"
            id="name"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />

          <label htmlFor="age">Enter age:</label>
          <input
            type="number"
            id="age"
            name="enteredAge"
            value={inputs.age}
            onChange={handleChange}
          />

          <div style={{ marginTop: '1em' }}>
            <label>Select gender</label>
            <select value={myGender} onChange={selectedGender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginTop: '1em' }}>
            <textarea
              value={textComments}
              onChange={submitComment}
              placeholder="Type your comments.."
            />
          </div>

          <div style={{ marginTop: '1em' }}>
            <input type="submit" className="ui button" />
          </div>
        </fieldset>
      </form>

      {submittedData && (
        <div style={{ marginTop: '1em' , border: '1px solid #ccc', background: '#f9f9f9', padding: '20px', margin: '20px' }}>
          <h2 style={{ color: 'blue' }}>Submitted Form Details:</h2>
          <p style={{ fontWeight: 'bold' }}>Name: {submittedData.name}</p>
          <p style={{ fontWeight: 'bold' }}>Age: {submittedData.age}</p>
          <p style={{ fontWeight: 'bold' }}>Gender: {submittedData.gender}</p>
          <p style={{ fontWeight: 'bold' }}>Comments: {submittedData.comments}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;