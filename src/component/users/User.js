import axios from "axios";
import {Link,useParams} from "react-router-dom"
import {React,useEffect,useState} from "react";




const User =()=> {

    const {id}=useParams();

    const [user,setUser]=useState({
        firstname:"",
        surname:"",
        standard:"",
        phoneno:""
    });

    useEffect(() => { 
        loadUser();
    },[]);

    const loadUser = async() =>{
        const result=await axios.get(`https://62a97087ec36bf40bdb787e6.mockapi.io/students/${id}`)
        setUser(result.data);
        console.log(result)
    }
     
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">Student Serial No: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
               <li className="list-group-item">firstname: {user.firstname}</li>  
               <li className="list-group-item">surname: {user.surname}</li>  
               <li className="list-group-item">Class: {user.standard}</li>  
               <li className="list-group-item">phoneNo: {user.phoneno}</li>  
            </ul>
            
        </div>
    );
}

export default User;