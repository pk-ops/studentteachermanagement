import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
// import axios from "axios";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CommonContext from "../../context/commonContext";
// import Search from "@mui/icons-material/Search";

const StudentsData = () => {
    const [students, setStudents] = useState([]);
    const{isLoggedIn}=useContext(CommonContext)
    const navigate=useNavigate()
    const deleteStudent=(id)=>{
        fetch(`http://localhost:9000/student/${id}`,{
                method:'DELETE'
              }).then(()=>getStudent())
        };

    const getStudent=()=>{
        if(!isLoggedIn){
            navigate("/LoginDetail")
        }else{
            fetch("http://localhost:9000/student",{
                headers:{"x-auth-token":localStorage.getItem('x-auth-token')}
            })
            .then((data)=>data.json())
            .then((mvs)=>setStudents(mvs));
          };
        }
       
      useEffect(()=>getStudent(),[]);

      
       
    return (

        <div className="container">
            <div className="py-4 ">
                <h1 className="text-center mb-4">Student Details</h1>
                <div>
                   
                    {/* <input className="mb-4" type="search"></input> */}
                    {/* <button ><SearchIcon/></button>  */}
                    
                   
                </div>
                
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th scope="col">Serial.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">lastname</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Email</th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                       {students.map((stud,index)=>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{stud.firstname}</td>
                                <td>{stud.lastname}</td>
                                <td>{stud.date}</td>
                                <td>{stud.email}</td>
                                <td>{stud.phoneno}</td>
                                <td>
                                    <Link className='btn btn-primary p-2 mx-2' to={`/stud/${stud._id}`}><i className='fa fa-eye' aria-hidden='true'></i></Link>

                                    <Link className='btn btn-outline-primary ' to={`/stud/edit/${stud._id}`}><EditIcon/></Link>
                                    <Link className="btn btn-danger" onClick={()=>deleteStudent(stud._id)}><DeleteIcon/></Link>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
} 

export default StudentsData;