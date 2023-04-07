import axios from "axios";
import {Link,useParams} from "react-router-dom"
import {React,useEffect,useState} from "react";
import { API } from "../../global";




const ViewStudent =()=> {

    const {id}=useParams();

    const [student,setStudent]=useState({
        firstname:"",
        surname:"",
        standard:"",
        phoneno:""
    });

    useEffect(() => { 
        loadUser();
    },[]);

    const loadUser = async() =>{
        const result=await axios.get(`${API}/student/${id}`)
        setStudent(result.data);
        console.log(result)
    }
     
    return (
        <div className="container py-4">
            
            <h1 className="display-4">Student Serial No: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
               <li className="list-group-item">firstname: {student.firstname}</li>  
               <li className="list-group-item">lastname: {student.lastname}</li>  
               <li className="list-group-item">Class: {student.class}</li>  
               <li className="list-group-item">phoneNo: {student.phoneno}</li>  
            </ul>
            <Link className="btn btn-primary mt-4" to="/StudentData">
                Back 
            </Link>
        </div>
    );
}

export default ViewStudent;