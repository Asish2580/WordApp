
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#02112c';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
}
  return (
    < >
  <Navebar tittle="Asish" About="About" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
    
 <TextForm heading="Enter the text to analyze"  mode={mode}/>
  {/*<About />*/}
  </div>
    
  </>
  );
}

export default App;
