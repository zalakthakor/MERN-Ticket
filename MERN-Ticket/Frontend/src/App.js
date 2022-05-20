import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import './App.css';

import Home from"./Components/Home/Home" 
import Signin from"./Components/Signin/Signin" 
import Signup from"./Components/Signup/Signup" 
import NavBar from"./Components/NavBar/NavBar"
import DataTable from "./Components/Tickets/Tickets"
import Edit from "./Components/Tickets/Edit";



function App() {
  return (
    <div className="App">
       <Router>
        <NavBar></NavBar>
        <Routes>
        
        <Route exact path="home" element={<Home />} /> 
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/ticket"element={<DataTable/>}/>
        
        <Route exact path="/edit/:id" element={<Edit/>} />
        
        </Routes>
  </Router> 
     
     
    </div>
  );
}

export default App;
