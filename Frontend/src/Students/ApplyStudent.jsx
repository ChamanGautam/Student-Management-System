import Header from "../Common/Header"
import Footer from "../Common/Footer"
import './AddStudent.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [course, setCourse] = useState("");
    let [city, setCity] = useState("");

    const addstudent = async () => {
        let result = await fetch('http://localhost:4500/applystudent', {
            method: 'post',
            body: JSON.stringify({ name, email, contact, course, city}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();

        if (result.Status) {
            alert("Data Added Successfully");
            navigate('/');
        }
        if (result.Required) {
            alert("All Fields are Required");
        }
    }
    return (
        <div className="top">
            <Header/>
            <div className="form-container">
                <div className="side1">
                    <h1>Welcome</h1>
                    <p>"Welcome to our admissions process! We are excited to guide you through the journey of joining our esteemed institution. Our streamlined admission procedure is designed to be simple and transparent, ensuring that you can easily submit your application and receive timely updates. Whether you're a prospective student seeking a new educational path or a parent looking for the best opportunities for your child, our team is here to assist you every step of the way. Explore our diverse programs, meet our dedicated faculty, and discover how we can help you achieve your academic and career goals."</p>
                </div>
                <div className="side2">
                    <h1>Apply Online</h1>
                    <input type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="tel" placeholder="Enter Contact Number" onChange={(e) => setContact(e.target.value)} value={contact} />
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
                    <input type="text" placeholder="Student City" onChange={(e) => setCity(e.target.value)} value={city} />
                    <button onClick={addstudent} className="apply-btn">Submit</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AddStudent;