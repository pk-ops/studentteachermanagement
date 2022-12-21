import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Navbar from "./component/Layout/Navbar";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/home";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import PagesNotFound from "./component/pages/PageNotFound";
import Adduser from "./component/users/Adduser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";

function App() {
  return (
   <Router>
     <div className="App">
      
      <Navbar/>
      <Routes>
       <Route exact path="/" element={<Home/>}></Route>
       <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/user/add" element={<Adduser/>}></Route>
      <Route exact path="/user/edit/:id" element={<EditUser/>}></Route>
      <Route exact path="/user/:id" element={<User/>}></Route>
      <Route exact path="*" element={<PagesNotFound/>}></Route>
      </Routes>
      
    </div>
   </Router>
  );
}

export default App;
