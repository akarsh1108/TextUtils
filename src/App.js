import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');//Whether Dark Mode is enabled or Not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
  setAlert({
    msg:message,
   type:type
  })
  setTimeout(()=>{setAlert(null)},1500)
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
       <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        
        {/* We use exact because it does partial matching if we don't use example users/ users/home it will always give 1  even if we use second statement */}
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter , Remove extra speces " mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
