import axios from "axios";
import {useNavigate} from "react-router-dom"
import {React,useState} from "react";



const Adduser=()=>{
        let navigate=useNavigate();
        const [user,setUser]=useState({
            firstname:"",
            surname:"",
            standard:"",
            phoneno:"",
        });
        const {firstname,surname,standard,phoneno}=user; 
        const onInputChange=e=>{
            setUser({...user,[e.target.name]:e.target.value})
            
        }

        const onSubmit = async e=>{
            e.preventDefault();
            await axios.post("https://62a97087ec36bf40bdb787e6.mockapi.io/students",user)
            navigate("/");
        }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                        <input 
                        type='text'
                        className="form-control form-control-lg"
                        placeholder="Enter Student firstname"
                        name="firstname"
                        value={firstname}
                        onChange={e=>onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                        type='text'
                        className="form-control form-control-lg"
                        placeholder="Enter Student surname"
                        name="surname"
                        value={surname}
                        onChange={e=>onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                        type='text'
                        className="form-control form-control-lg"
                        placeholder="Enter Student class"
                        name="standard"
                        value={standard}
                        onChange={e=>onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                        type='text'
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phoneno"
                        value={phoneno}
                        onChange={e=>onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add Student</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Adduser;