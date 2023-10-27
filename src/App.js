//import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar';
import About from'./components/About';

import Testform from'./components/Testform';
import { useState } from 'react';
import Alert from './components/Alert';

import{BrowserRouter as Router,
Routes,
Route,
Link  }
from "react-router-dom";



function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(()=>{
    setAlert(null)
  },2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Enabled to dark mode", "success");
    document.title="React App- Dark";
    }

    else{
      setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Disabled from dark mode", "success");
     document.title="React App- Light";
    }
  }
  return (
    <>
   
   <Router>
<Navbar mode={mode}  toggleMode={toggleMode}/>

<Alert alert={alert}/>
<div className="container">
<div className="container">
  <Routes>
    <Route path="/about" element={ <About mode={mode}/>}>
    
    </Route>

    <Route  path="/Testform" element={ <Testform showAlert={showAlert} heading=" Enter the text below" mode={mode}/>}>
    
    </Route>
  </Routes>


</div>



{/* <Testform showAlert={showAlert} heading=" Enter the text below" mode={mode}/> */}

</div>
</Router>


    </>
  );
}

export default App;

