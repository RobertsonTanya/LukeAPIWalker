
import { Router } from "@reach/router";
import React, { useState } from "react";

import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from "./components/Planets";


function App() {
  const [apiData, setApiData] = useState({});
  const [isError, setIsError] = useState(false);

  return (
    <div className="App">
      <Form 
          setApiData={setApiData}
          setIsError={setIsError}
      />
      <Router>
        <People 
            apiData={apiData} 
            isError={isError}
            path="/people/:id" 
        />
        <Planets
            apiData={apiData} 
            isError={isError} 
            path="/planets/:id" 
        />
      </Router>
    </div>
  );
}

export default App;
