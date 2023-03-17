
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';

function App() {
  return (
    /*wrapping navbar and addemployee by adding an empty tag <> <AddEmployee/>
    <EmployeeList/> </>
   */ 
  /*here we keep the navbar outside the <route> as it should be shown everypage*/
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
          <Route index element={<EmployeeList/>}></Route>
          <Route path='/' element={<AddEmployee/>}></Route> 
          <Route path='/employeeList' element={<EmployeeList/>}></Route>
          <Route path='addEmployee' element={<AddEmployee/>}></Route>

   </Routes>  
   </BrowserRouter>
    
  </>
  );
}

export default App;
