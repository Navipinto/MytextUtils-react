import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        message:message,
        type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleModefun=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled","success");
      document.title="TextUtils - dark mode"
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode has been disabled","success");
      document.title = "TextUtils - light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          theme={mode}
          toggleMode={toggleModefun}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm
              heading="Enter the text to analyze"
              theme={mode}
              showAlert={showAlert}
            />}></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;  
