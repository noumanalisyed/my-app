
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
      setAlert({
        msg : message,
        type : type
      })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
          <Navbar title="TextUtils" homeText="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert="This is Alert !!!"/>
          <div className="container my-3"> 
              <TextForm heading="Enter the text to analyse below" mode={mode}/>
          </div>
    </>
  );
}

export default App;
