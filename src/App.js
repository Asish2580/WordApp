
import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
function App() {
  return (
    < >
  <Navebar tittle="Asish" About="About"/>
  <div className="container">
    
  <TextForm heading="Enter the text to analyze"  />
  </div>
    
  </>
  );
}

export default App;
