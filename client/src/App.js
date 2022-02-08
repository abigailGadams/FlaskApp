import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Creating the state variable
  const [data, setData] = useState([{}]);
  // data:actual data --- setData:used to manipulate state of data variable
  const [currentTime, setCurrentTime] = useState(0);

  // fetching the backend response from json
  useEffect(() => {
    fetch("/members")
      .then(
        (res) => res.json()
        // setting the data to whatever is in the json
      )
      .then((data) => {
        setData(data);
        // checking to make sure data was retrieved from backend
        console.log(data);
      });
  }, []);

  return (
    //     <div className="App">

    //     </div>
    // Checking if API has been fetched - Loading if NOT fetched yet, else displaying
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Modern Technology Solutions</code> ~ By Abigail Adams
        </p>
        <a
          className="App-link"
          href="https://github.com/abigailGadams"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out portfolio of projects!
        </a>
      </header>
      {typeof data.members === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}

export default App;
