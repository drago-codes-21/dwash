import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InfoForm = ({ handleClick }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setMessage("Please enter valid Reg. ID");
    } else {
      setMessage(`Hello, ${name}!`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Welcome!!</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Enter Company Registration Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Search
                </button>
              </form>
              {/* <p className="mt-3">{message}</p> */}
              {console.log(message)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
