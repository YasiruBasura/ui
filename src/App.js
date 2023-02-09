
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';

function App() {
  return (
    /*wrapping navbar and addemployee by adding an empty tag
   */ 
   <>
    <Navbar/>
    <AddEmployee/>
  </>
  );
}

export default App;
