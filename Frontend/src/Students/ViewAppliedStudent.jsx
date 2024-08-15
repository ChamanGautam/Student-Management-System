import AdminHeader from "../Common/AdminHeader";
import './ViewStudent.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ViewStudent = () => {
    let [student, setStudent] = useState([]);
    const getStudent = async () => {
        let result = await fetch('http://127.0.0.1:4500/getapplystudent');
        result = await result.json();
        console.log(result);
        setStudent(result);
    }
    useEffect(() => {
        getStudent();
    }, []);


    let deleteData = async (id) => {
        if (window.confirm("Are you sure ?")) {
            let result = await fetch(`http://127.0.0.1:4500/deleteapplieddata/${id}`, {
                method: 'delete'
            });
            result = await result.json();
            if (result) {
                getStudent();
            }
        }
    }

    let searchStudent = async (e) => {
        let key = e.target.value;
        if (key) {
            let data = await fetch(`http://localhost:4500/searchapplieddata/${key}`);
            data = await data.json();
            if (data) {
                setStudent(data);
            } else {
                getStudent();
            }
        }else{
            getStudent();
        }

    }

    const searchCourse = async (e) => {
        let key = e.target.value;
        if (key) {
            let data = await fetch(`http://localhost:4500/searchappliedcourse/${key}`);
            data = await data.json();
            if (data) {
                setStudent(data);
            } else {
                getStudent();
            }
        }else{
            getStudent();
        }

    }
    return (
        <div>
            <AdminHeader />
            <div className="view-base">
                <div className="view-main">
                    <div className="view-heading">All Applied Students</div>
                    <table className="view-table" cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td colSpan="2" id="td1">
                                <input type="search" onChange={searchStudent} className="view-search" placeholder="Search Student" />
                            </td>
                            <td colSpan="2" id="td1">
                                <input type="search" onChange={searchCourse} className="view-search" placeholder="Search by Course" />
                            </td>
                            <td>
                            <td colSpan="2">
                                <button className="btn-sec"><Link to="/viewstudent">Added Student</Link></button>
                            </td>
                            </td>
                        </tr>
                        <tr className="view-row">
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Course</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                        {
                            student.length > 0 ? student.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{ item.email }</td>
                                    <td>{ item.contact }</td>
                                    <td>{item.course}</td>
                                    <td>{ item.city }</td>
                                    <td>
                                        <Link to={"/AppliedStudent/" + item._id} className="viewbtn"><i className="bi bi-eye-fill"></i> View</Link>
                                        <Link to={"/editappliedstudent/" + item._id} className="udbtn"><i className="bi bi-pencil-square"></i> Update</Link>  &nbsp; <button className="delbtn" onClick={() => deleteData(item._id)}><i className="bi bi-trash3-fill" ></i> Delete</button> </td>
                                </tr>
                            ) :
                                <tr>
                                    <td colSpan="7">
                                    <h1>No Data Found</h1>
                                    </td>
                                </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewStudent;

