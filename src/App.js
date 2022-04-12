import './App.css';
import Header from './Components/Header'
import TextArea from './Components/TextArea'
import Alert from './Components/Alert'
import {useState} from 'react'
import React from 'react';

// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
      setAlert({
        msg : message , 
        type : type
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  return (
    <>
    {/* <Router> */}

    <Header/>
    <Alert alert = {alert}/>
    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextArea showAlert = {showAlert}/>
          {/* </Route>
        </Switch> */}

    
    {/* </Router> */}
    </>
  );
}

export default App;
