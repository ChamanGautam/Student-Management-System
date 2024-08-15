import AdminHeader from "../Common/AdminHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Student.css';
import { Link } from "react-router-dom";
const AppliedStudent = (id) => {
    let params=useParams();
    let [data, setData]=useState([]);
    let getStudent =async () =>{
        let result = await fetch(`http://127.0.0.1:4500/studentapplieddata/${params.id}`,);
        result = await result.json();
        setData(result);
    }
    useEffect(()=>{
        getStudent();
    });
    return (
        <div>
            <AdminHeader />
            <div className="student-base">
                <div className="student-main">
                    <div className="student-heading">{ data.name }'s details</div>
                    <table className="student-table">
                        <tr>
                            <th>Name : </th>
                            <td>{ data.name }</td>
                        </tr>
                        <tr>
                            <th>Email : </th>
                            <td>{ data.email }</td>
                        </tr>
                        <tr>
                            <th>Contact : </th>
                            <td>{ data.contact }</td>
                        </tr>

                        <tr>
                            <th>Course : </th>
                            <td>{ data.course }</td>
                        </tr>
                       
                        <tr>
                            <th>City : </th>
                            <td>{ data.city }</td>
                        </tr>
                       
                    </table>
                    <Link to="/viewappliedstudent" className="backbtn"><i className="bi bi-arrow-left-square-fill"></i> Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default AppliedStudent;