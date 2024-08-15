import AdminHeader from "../Common/AdminHeader";
import './EditStudent.css';
import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditStudent = () => {
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
    let params = useParams();

    let getStudent = async () => {
        let result = await fetch(`http://127.0.0.1:4500/studentdata/${params.id}`);
        result = await result.json();
        setName(result.name); setEmail(result.email); setContact(result.contact); setCollege(result.college); setCourse(result.course); setTotalfee(result.totalfee); setPaidfee(result.paidfee); setLeftfee(result.leftfee); setCity(result.city); setJoindate(result.joindate);
    }
    useEffect(() => {
        getStudent();
    }, []);

    let updateStudent = async () => {
        let result = await fetch(`http://localhost:4500/updatestudent/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, email, contact, college, course, totalfee, paidfee, leftfee, city, joindate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.Success) {
            alert("Data Updated Successf0ll");
            navigate('/viewstudent');
        }
        if (result.status) {
            alert("Something went wrong unable to change to ");
        }
    }

    function fees() {
        let f = Number(totalfee) - Number(paidfee);
        setLeftfee(f);
    }



    return (
        <div>
            <AdminHeader />
            <div className="edit-base">
                <div className="edit-main">

                    <div className="edit-heading">Update data of {name}</div>
                    <table className="edit-table" cellSpacing="0">


                        <tr>
                            <th>Name :</th>
                            <td>  <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Email :</th>
                            <td>  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Contact :</th>
                            <td>  <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>College :</th>
                            <td>  <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Course :</th>
                            <td> {
                                course === "BCA" ? (
                                    <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                        <option value="BCA">BCA</option>
                                        <option value="B.Com">B.Com</option>
                                        <option value="B.Sc">B.Sc</option>
                                        <option value="BBA">BBA</option>
                                        <option value="MCA">MCA</option>
                                        <option value="M.Com">M.Com</option>
                                        <option value="M.Sc">M.Sc</option>
                                        <option value="MBA">MBA</option>
                                    </select>
                                ) :
                                    <></>
                            }
                                {
                                    course === "B.Com" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "B.Sc" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "BBA" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "MCA" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "M.Com" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "M.Sc" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                                {
                                    course === "MBA" ? (
                                        <select onChange={(e) => setCourse(e.target.value)} value={course} className="selectedit">
                                            <option value="BCA">BCA</option>
                                            <option value="B.Com">B.Com</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="M.Com">M.Com</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="MBA">MBA</option>
                                        </select>
                                    ) :
                                        <></>
                                }
                            </td>
                        </tr>
                        <tr>
                            <th>Total Fees :</th>
                            <td>  <input type="number" value={totalfee} onChange={(e) => setTotalfee(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Paid Fees :</th>
                            <td>  <input type="number" value={paidfee} onChange={(e) => setPaidfee(e.target.value)} onKeyUp={fees} /> </td>
                        </tr>
                        <tr>
                            <th>Left Fees :</th>
                            <td>  <input type="number" value={leftfee} onChange={(e) => setLeftfee(e.target.value)} readOnly /> </td>
                        </tr>
                        <tr>
                            <th>City :</th>
                            <td>  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <th>Join Date :</th>
                            <td>  <input type="text" value={joindate} onChange={(e) => setJoindate(e.target.value)} /> </td>
                        </tr>
                    </table>
                    <button className="editbtn" onClick={updateStudent}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;