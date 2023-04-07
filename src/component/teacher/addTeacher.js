import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonContext from '../../context/commonContext';
import { API } from '../../global';

function AddTeacher(props) {
    const navigate=useNavigate();

    const {isLoggedIn} =useContext(CommonContext)
    const [teacher,setTeacher]=useState({
        firstname:"",
        lastname:"",
        date:"",
        gender:"",
        email:"",
        phoneno:"",
        class:""
    })


    const handleInput=(e)=>{
        setTeacher({...teacher,[e.target.name]:e.target.value})
    }

    const registerTeacher=(e)=>{
        e.preventDefault();

        const data={
            firstname:teacher.firstname,
            lastname:teacher.lastname,
            date:teacher.date,
            gender:teacher.gender,
            email:teacher.email,
            class:teacher.class,
            phoneno:teacher.phoneno,

        }
        fetch(`${API}/teachers/`,{
            method:"POST",
            crossDomain:true,
            headers:{"Content-Type":"application/json",
        },
        body:JSON.stringify(data),
        }).then((res)=>{
            navigate("/teacherList")
        })
    }

  
    return (
         <div className="container" style={{ marginTop: "35px" }}>
            <div className="w-50 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add New Teacher</h2>
                <form className="px-md-2" onSubmit={registerTeacher}>
                    <div className="row">
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                onChange={handleInput}
                                value={teacher.firstname}
                                placeholder="First name"
                            />

                        </div>
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                onChange={handleInput}
                                value={teacher.lastname}
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
                                    value={teacher.date}
                                    placeholder="Select a joining date"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4" onChange={handleInput} value={teacher.gender} >

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
                                    value={teacher.email}
                                     />

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
                                    value={teacher.phoneno} 
                                    />

                            </div>

                        </div>
                    </div>

                    <div className="form-outline mb-4"  >

                        <div className="form-outline">
                                 <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Enter Class Assigned"
                                    name="class"
                                    onChange={handleInput}
                                    value={teacher.class }
                                     />
                        </div>

                    </div>


                    <button type="submit" className="btn btn-success btn-lg mb-1">Submit</button>

                </form>

            </div>
        </div>
    );
}

export default AddTeacher;