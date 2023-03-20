import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';

import About from "./component/pages/About";
import Contact from "./component/pages/Contact";

import { Route , Routes} from "react-router-dom"
import PagesNotFound from "./component/pages/PageNotFound";
import { useNavigate } from "react-router-dom";


import StudentsData from "./component/pages/studentData";
import Addstudent from "./component/students/Addstudent";
import { AppBar, Button, Paper, ThemeProvider, Toolbar } from "@mui/material";
import Login from "./Authenticate/Login";
import SignUp from "./Authenticate/SignUp";
import EditStudent from "./component/students/EditStudent";
import ViewStudent from "./component/students/viewStudent";
import TeacherList from "./component/teacher/teacherList";
import CommonContext from "./context/commonContext";
import react,{useState} from 'react'
import AddTeacher from "./component/teacher/addTeacher";
import PopupPage from "./component/pages/popupPage";

function App() {

  const navigate = useNavigate();
  const [isLoggedIn, SetIsLoggedIn] = useState(localStorage.getItem("token"));

  const clearFun=()=>{   
    if(isLoggedIn){
      localStorage.removeItem("x-auth-token")
      localStorage.removeItem("id")
      localStorage.removeItem("adminname")
      SetIsLoggedIn(false) 
      navigate("/login")
    }else{
      navigate("/login")
    }
     
}
  return (
    // <ThemeProvider>
    // <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }} >

    <div className="App">
      <AppBar position="static" color="inherit" >
        <Toolbar>
          <Button color="inherit"  onClick={()=>navigate("/teacherlist")} >Teacher List</Button>
          <Button color="inherit" onClick={()=>navigate("/studentAdd")}>Add Student</Button>
          <Button color="inherit" onClick={()=>navigate("/StudentData")}>Student-List</Button>
          
          <Button color="inherit"  onClick={()=>navigate("/about")}>About</Button>
          <Button color="inherit"  onClick={()=>navigate("/contact")}>Contact</Button>
         <div className="auth" style={{marginLeft:'auto'}}> 
         {isLoggedIn==true? <Button onClick={clearFun}>Logout</Button>:<Button color="inherit"  onClick={()=>navigate("/login")}>Login</Button>}
          
          {/* <Button color="inherit"  onClick={()=>navigate("/signup")}>Signup</Button> */}
         </div>
         

        </Toolbar>
      </AppBar>
        
  
     <section className="route-container">
     <CommonContext.Provider value={{ isLoggedIn, SetIsLoggedIn }}>
      {/* <Navbar/> */}
      <Routes>
      <Route  path="/teacher/add" element={<AddTeacher/>}/>
      <Route  path="/teacherlist" element={<TeacherList/>}/>
      <Route  path="/StudentData" element={<StudentsData/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      
      <Route  path="/studentAdd" element={<Addstudent/>}/>
      <Route  path="/stud/edit/:id" element={<EditStudent/>}/>
      <Route  path="/stud/:id" element={<ViewStudent/>}/>
      <Route  path="*" element={<PagesNotFound/>}/>

      <Route  path="/login" element={<Login/>}/>
      <Route path="/LoginDetail" element={<PopupPage/>}/>
      {/* <Route  path="/signup" element={<SignUp/>}/> */}
      
      </Routes>
      </CommonContext.Provider>
    </section>
  
    </div>

    // </Paper>
    // </ThemeProvider>

  );
}

export default App;
