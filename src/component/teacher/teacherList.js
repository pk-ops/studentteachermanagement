import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonContext from '../../context/commonContext';
import './teacher.css'
import { API } from '../../global';
function TeacherList(props) {
    const navigate=useNavigate();

    const [teacher,setTeacher]=useState([]);

    const {isLoggedIn} =useContext(CommonContext)

    const getTeacher=()=>{
        // if(!isLoggedIn){
        //     navigate("/LoginDetail")
        // }else{
            fetch(`${API}/teachers/`,{
                headers:{"x-auth-token":localStorage.getItem("x-auth-token")}
            })
            .then((data)=>data.json())
            .then((tl)=>setTeacher(tl))
        };
        
      
    useEffect(()=>getTeacher(),[])

    const addteacher=()=>{
        if(isLoggedIn){
            navigate('/teacher/add')
        }
        else{
            navigate("/LoginDetail")
        }
    }
    return (
        <div className="container">
        <div className="py-4 ">
            <h1 className="text-center mb-4">Teacher's Detail</h1>
          
               
                {/* <input className="mb-4" type="search"></input> */}
                {/* <button ><SearchIcon/></button>  */}
                <div><Button color="inherit"  className='mb-4 teacher_btn' onClick={addteacher}><AddIcon color="primary"/>Teacher</Button></div>
                
               
           
            
            <table className="table">
                <thead>
                    <tr className="bg-dark text-white">
                        <th scope="col">Serial.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNo</th>
                        <th scope="col">Class Assigned</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                   {teacher.map((ttl,index)=>(
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{ttl.firstname} {ttl.lastname}</td>
                            {/* <td>{ttl.lastname}</td> */}
                            <td>{ttl.email}</td>
                            <td>{ttl.phoneno}</td>
                            <td>{ttl.class}</td>
                            <td> 
                                {/* <Link className='btn btn-primary p-2 mx-2' to={`/stud/${stud._id}`}><i className='fa fa-eye' aria-hidden='true'></i></Link> */}

                                {/* <Link className='btn btn-outline-primary p-2 mx-2' to={`/stud/edit/${stud._id}`}><EditIcon/></Link> */}
                                 {/* <Link className="btn btn-danger p-2" onClick={()=>deleteStudent(stud._id)}><DeleteIcon/></Link>  */}
                             </td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </div>

    </div>
    );
}

export default TeacherList;