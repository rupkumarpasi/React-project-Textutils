// import logo from './logo.svg';
import React, { useState } from 'react'
import './Component/alert.css'
import './Component/Form.css'
import './Component/Nav-css.css'
import Navbar from './Component/Navbar.jsx' 
import Navform from './Component/Navform.jsx' 
import About from './Component/About.jsx' 
import Alert from './Component/Alert'
import { Routes, Route, Link} from "react-router";

// import { Routes, Route, Link } from "react-router";



function App() {
const [mode,setmode] = useState('light');
const togglemode=()=>{
  if(mode === "dark"){
setmode('light');
showAlert("success","Light mode enabled");
document.body.style.backgroundColor = 'white';

  }
  else{
    setmode('dark');
    document.body.style.backgroundColor = '#012B54'
    showAlert("success","darkmode enabled");
  }
}
const [alert,setalert] = useState(null);
const showAlert =(type,message)=>{
  setalert({
type : type,
msg: message
  })
  setTimeout(()=>{
setalert(null);
  },2000)
}
  return(
 
 
 
<>


<Navbar home="home" about="About us" contact="contact us" search="search" mode={mode} toggleMode={togglemode} />
  <Alert alert={alert}/>
    
     
    
       <Routes>
        <Route path="/" element={ <Navform showAlert={showAlert} title="Email-Address" mode={mode} password="Pass-key" /> } />
        <Route path="/about" element={<About mode={mode}/>} />
   
      </Routes>
         </>


  );
}

export default App;



