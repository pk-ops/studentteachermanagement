import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
    const [students, setStudents] = useState([]);
    useEffect(() =>{ 
        loadUser();
    }, []);

    const loadUser=async()=>{
        const result=await axios.get("https://62a97087ec36bf40bdb787e6.mockapi.io/students")
        setStudents(result.data);
        console.log(result);
    }

    const deleteUser=async id=>{
        await axios.delete(`https://62a97087ec36bf40bdb787e6.mockapi.io/students/${id}`);
        loadUser();
    }

    // const getMovies=()=>{
    //     fetch(`${API}/movies`)
    //     .then((data)=>data.json())
    //     .then((mvs)=>setMovieList(mvs));
    //   };
    //   useEffect(()=>getMovies(),[]);
    return (

        <div className="container">
            <div className="py-4">
                <h1>Student Details</h1>
                <table class="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th scope="col">Serial.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Class</th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                       {students.map((user,index)=>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>
                                <td>{user.surname}</td>
                                <td>{user.standard}</td>
                                <td>{user.phoneno}</td>
                                <td>
                                    <Link className='btn btn-primary p-2 mx-2' to={`/user/${user.id}`}><i class='fa fa-eye' aria-hidden='true'></i></Link>

                                    <Link className='btn btn-outline-primary p-2 mx-2' to={`/user/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger p-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
} 

export default Home;