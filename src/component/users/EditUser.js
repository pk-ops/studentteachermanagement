import axios from "axios";
import {useNavigate,useParams} from "react-router-dom"
import {React,useEffect,useState} from "react";



const EditUser=()=> {
 let navigate=useNavigate();

 const {id}=useParams();

 const [student,setStudent]=useState({
    firstname:"",
    surname:"",
    standard:"",
    phoneno:"",
});

useEffect(() =>{ 
    loadUser();
}, []);

const {firstname,surname,standard,phoneno}=student; 
const onInputChange=e=>{
    setStudent({...student,[e.target.name]:e.target.value})
    
}

const onSubmit = async e=>{
    e.preventDefault();
    await axios.put(`https://62a97087ec36bf40bdb787e6.mockapi.io/students/${id}`,student)
    navigate("/");
}



const loadUser=async()=>{
    const result=await axios.get(`https://62a97087ec36bf40bdb787e6.mockapi.io/students/${id}`)
    setStudent(result.data);
    console.log(result);
}

    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add A User</h2>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <input 
                    type='text'
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="firstname"
                    value={firstname}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type='text'
                    className="form-control form-control-lg"
                    placeholder="Enter Your UserName"
                    name="surname"
                    value={surname}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type='text'
                    className="form-control form-control-lg"
                    placeholder="Enter Student Class"
                    name="standard"
                    value={standard}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type='number'
                    className="form-control form-control-lg"
                    placeholder="Enter Your Phone Number"
                    name="phoneno"
                    value={phoneno}
                    onChange={e=>onInputChange(e)}
                    />
                </div>

                <button className="btn btn-primary btn-block">Update User</button>
                
            </form>
        </div>
    </div>
    );
}

export default EditUser;