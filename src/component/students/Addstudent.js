
import { useNavigate } from "react-router-dom"
import { React, useContext, useState } from "react";
import CommonContext from "../../context/commonContext";



const Addstudent = () => {
    let navigate = useNavigate();

    const {isLoggedIn}=useContext(CommonContext)
    const [inputStudent, setStudent] = useState({
        firstname: "",
        lastname: "",
        date:"",
        gender:"",
        class:"",
        email:"",
        phoneno: "",
        registrationcode:""
    });
   

    const handleInput = e => {
        setStudent({ ...inputStudent, [e.target.name]: e.target.value })

    }

    const registerStudent = (e) => {
        e.preventDefault();
        const data={
            firstname:inputStudent.firstname,
            lastname:inputStudent.lastname,
            date:inputStudent.date,
            gender:inputStudent.gender,
            email:inputStudent.email,
            class:inputStudent.class,
            phoneno:inputStudent.phoneno,
            registrationcode:inputStudent.registrationcode

        }

       if(!isLoggedIn){
            navigate("/LoginDetail")
       }else{
        fetch("http://localhost:9000/student/",{
            method:"POST",
            crossDomain:true,
            headers:{"Content-Type":"application/json",
            "x-auth-token":localStorage.getItem("x-auth-token")
        },
        body:JSON.stringify(data),
        }).then((res)=>{
            navigate("/StudentData");
        })
        
    }
 }
       
    return (
        <div className="container" style={{ marginTop: "35px" }}>
            <div className="w-50 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Registration Info</h2>
                <form className="px-md-2" onSubmit={registerStudent}>
                    <div className="row">
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                onChange={handleInput}
                                value={inputStudent.firstname}
                                placeholder="First name"
                            />

                        </div>
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                onChange={handleInput}
                                value={inputStudent.lastname}
                                placeholder="Last name"
                            />

                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-6 mb-4">

                            <div className="form-outline datepicker">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={handleInput}
                                    value={inputStudent.date}
                                    placeholder="Select a date of birth"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" onChange={handleInput} value={inputStudent.gender} >

                            <h6 className="mb-2 pb-1">Gender: </h6>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="femaleGender"
                                    value="FEMALE" />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="maleGender"
                                    value="MALE" />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="otherGender"
                                    value="OTHER" />
                                <label className="form-check-label" for="otherGender">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <input
                                    type="email"
                                    className="form-control "
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleInput}
                                    value={inputStudent.email} />

                            </div>

                        </div>

                        <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <input
                                    type="tel"
                                    className="form-control "
                                    placeholder="Phone Number"
                                    name="phoneno"
                                    onChange={handleInput}
                                    value={inputStudent.phoneno} />

                            </div>

                        </div>
                    </div>

                    <div className="form-outline mb-4"  onChange={handleInput} value={inputStudent.class} >
                        <div className="form-outline">
                                 <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Enter class1 to class10"
                                    name="class"
                                    onChange={handleInput}
                                    value={inputStudent.class
                                    } />
                        </div>

                    </div>

                    <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                        <div className="col-md-6">

                            <div className="form-outline">
                                <input
                                 type="text" 
                                 className="form-control"
                                 placeholder="Registration code"
                                 name="registrationcode"
                                 onChange={handleInput}
                                 value={inputStudent.registrationcode}
                                  />
                            </div>

                        </div>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg mb-1" >Submit</button>

                </form>

            </div>
        </div>
  

    )
}

export default Addstudent;