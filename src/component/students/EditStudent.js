import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { React, useEffect, useState } from "react";



const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudents] = useState(null);
    const getStudent = () => {
        fetch(`http://localhost:9000/student/${id}`)
            .then((data) => data.json())
            .then((mvs) => setStudents(mvs));
    };
    useEffect(() => getStudent(), []);

    return (
        <>
            {student ? <EditStudentForm student={student} /> : "loading.."}
        </>)
}

function EditStudentForm({ student }) {

    let navigate = useNavigate();

    const [firstname, setFirstname] = useState(student.firstname);
    const [lastname, setLastname] = useState(student.lastname);
    // const [gender, setGender] = useState(student.gender)
    const [date, setDate] = useState(student.date)
    const [classs, setClasss] = useState(student.class)
    const [email, setEmail] = useState(student.email)
    const [phoneno, setPhone] = useState(student.phoneno)
    const [registrationcode, setRegistrationCode] = useState(student.registrationcode)

   

    const updateStudent = async e => {
        e.preventDefault();
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            date: date,
            classs: classs,
            registrationcode: registrationcode,
            phoneno: phoneno
        }
        fetch(`http://localhost:9000/student/${student._id}`, {
            method: "PUT",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            navigate("/StudentData")
        })
    }


    return (
        <div className="container" style={{ marginTop: "35px" }}>
            <div className="w-50 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Student Information</h2>
                <form className="px-md-2" onSubmit={updateStudent}>
                    <div className="row">
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                value={firstname}
                                onChange={(event) => setFirstname(event.target.value)}
                                placeholder="First name"
                            />

                        </div>
                        <div className="form-outline col-md-6 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                value={lastname}
                                onChange={(event) => setLastname(event.target.value)}
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
                                    value={date}
                                    onChange={(event) => setDate(event.target.value)}
                                    placeholder="Select a date"
                                />
                            </div>
                        </div>
                        {/* <div className="col-md-6 mb-4" 
                         >

                            <h6 className="mb-2 pb-1">Gender: </h6>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="femaleGender"
                                   onChange={(event)=>setGender(event.target.value)}
                                  checked={setGender==="Female"} />
                                <label className="form-check-label" for="femaleGender">Female</label>
                            </div>

                            <div className="form-check form-check-inline" >
                                <input className="form-check-input" type="radio" name="gender" id="maleGender"
                                  onChange={(event)=>setGender(event.target.value)}
                                  checked={gender.value==="Male"} />
                                <label className="form-check-label" for="maleGender">Male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="otherGender"
                                   onChange={(event)=>setGender(event.target.value)}
                                   checked={gender.value==="Other"} />
                                <label className="form-check-label" for="otherGender">Other</label>
                            </div>
                        </div> */}
                    </div>

                    <div className="row">

                        <div className="col-md-6 mb-4 pb-2">

                            <div className="form-outline">
                                <input
                                    type="email"
                                    className="form-control "
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
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
                                    value={phoneno}
                                    onChange={(event) => setPhone(event.target.value)}
                                />

                            </div>

                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <div className="form-outline">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Enter class1 to class10"
                                name="class"
                                value={classs}
                                onChange={(event) => setClasss(event.target.value)}
                            />
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
                                    value={registrationcode}
                                    onChange={(event) => setRegistrationCode(event.target.value)}
                                />
                            </div>

                        </div>
                    </div>

                    <button type="submit" className="btn btn-success btn-lg mb-1">Update Student Info</button>

                </form>

            </div>
        </div>
    );
}




export default EditStudent;