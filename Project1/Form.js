import React from "react";

const MyForm = () => {
  const [inputs, setInputs] = React.useState({ gender: "famale" });
  const [comments, setComments] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((comments) => [...comments, inputs]);
  };
  const handleChagne = (e) => {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form in ReactJS</legend>
        <label for="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          placeholder="type your name..."
          value={inputs.name}
          name="name"
          onChange={(e) => handleChagne(e)}
        />
        <label for="name">Enter your age: </label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="enter your age"
          value={inputs.age}
          onChange={(e) => handleChagne(e)}
        />
        <div style={{ marginTop: "1em" }}>
          <label>Select gender</label>
          <select value={inputs.gender} onChange={handleChagne} name="gender">
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <label>Comments</label>
        <textarea
          value={inputs.textComments}
          onChange={handleChagne}
          name="textComments"
        />

        <div style={{ marginTop: "1em" }}>
          <input type="submit" className="ui button"></input>
        </div>
      </fieldset>
      {comments[0] && (
        <div style={{ marginTop: "1em", marginLeft: "1em" }}>
          <h3>Comments</h3>
          <ol>
            {comments.map(({ name, textComments, gender, age }) => (
              <li style={{ marginBottom: "2em" }}>
                <p>Thank you for your input.</p>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Comments: {textComments}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </form>
  );
};

export default MyForm;