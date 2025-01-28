import { useState } from 'react';
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode enabled', 'success');
      document.title = 'TextUtils - Dark Mode enabled';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <BrowserRouter>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write the text to analyze" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
