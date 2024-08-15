import AdminHeader from "../Common/AdminHeader";
import './ApplyStudent.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [college, setCollege] = useState("");
    let [course, setCourse] = useState("");
    let [totalfee, setTotalfee] = useState("");
    let [paidfee, setPaidfee] = useState("");
    let [leftfee, setLeftfee] = useState("");
    let [city, setCity] = useState("");
    let [joindate, setJoindate] = useState("");

    const addstudent = async () => {
        let result = await fetch('http://localhost:4500/addstudent', {
            method: 'post',
            body: JSON.stringify({ name, email, contact, college, course, totalfee, paidfee, leftfee, city, joindate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();

        if (result.Status) {
            alert("Data Added Successfully");
            navigate('/adminhome');
        }
        if (result.Required) {
            alert("All Fields are Required");
        }
    }

    function fees() {
        let f = Number(totalfee) - Number(paidfee);
        setLeftfee(f);
    }

    function join() {
        let da = new Date();
        let d = da.getDate();
        let m = da.getMonth();
        let y = da.getFullYear();
        let fd = d + "-" + m + "-" + y;
        setJoindate(fd);
    }
    return (
        <div className="add-top">
            <AdminHeader />
            <div className="add-form-container">
                <h1>Add New Student</h1><hr />
                <input type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="tel" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} value={contact} />
                <input type="text" placeholder="Enter College" onChange={(e) => setCollege(e.target.value)} value={college} />
                <select onChange={(e) => setCourse(e.target.value)} value={course}>
                    <option selected >Select Course</option>
                    <option value="BCA">BCA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="BBA">BBA</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Com">M.Com</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="MBA">MBA</option>
                </select>
                <input type="Number" placeholder="Total Fee" onChange={(e) => setTotalfee(e.target.value)} value={totalfee} />
                <input type="Number" placeholder="Paid Fee" onChange={(e) => setPaidfee(e.target.value)} value={paidfee} onKeyUp={fees} />
                <input type="Number" placeholder="Left Fee" onChange={(e) => setLeftfee(e.target.value)} value={leftfee} readOnly />
                <input type="text" placeholder="Student City" onChange={(e) => setCity(e.target.value)} value={city} />
                <input type="text" placeholder="joining date" onChange={(e) => setJoindate(e.target.value)} value={joindate} readOnly onClick={join} />
                <button onClick={addstudent}>Add Student</button>
            </div>
        </div>
    );
}

export default AddStudent;