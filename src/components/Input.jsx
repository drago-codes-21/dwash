import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-hot-toast";
import Cards from "./Card";
import Table from "./Dummy";
import Logo from "../assets/BCS.png";

const InfoForm = () => {
  const [check, setCheck] = useState(false);
  const [flag, setFlag] = useState(false);
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
  const handleClick = (val) => {
    if (val === "12345") {
      setCheck(!check);
      toast.success("Data fetched successfully");
    } else {
      toast.error("Incorrect registration ID");
      setCheck(false);
    }
  };
  const handleTableData = () => {
    setFlag(!flag);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Logo}
                    alt="logo"
                    style={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                  />
                  <h3 className="card-title text-center">Welcome </h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                      Registration Number:
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
                    onClick={() => handleClick(name)}
                  >
                    Search
                  </button>
                </form>
                {console.log(message)}
              </div>
            </div>
          </div>
        </div>
        <Cards check={check} />
        {check && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "15px",
            }}
          >
            <button className="btn btn-danger" onClick={handleTableData}>
              Compare
            </button>
          </div>
        )}
      </div>
      {flag && <Table />}
    </>
  );
};

export default InfoForm;
