import AdminHeader from "../Common/AdminHeader";
import './AdminHome.css';
import { Link } from 'react-router-dom';
const AdminHome = () => {
    return (
        <div className="main">
            <AdminHeader />
            <div className="admin-base">
                <div className="admin-txt">
                    <h1>Hey Chaman</h1>
                    <p>Welcome to the Student Dashboard here You can Add Students also view all the Students data and UPDATE , DELETE the data </p>
                </div>
                <div className="btns">
                    <div className="addstu">
                        <h3><i className="bi bi-person-plus-fill"></i> Add Student</h3>
                        <p>This process involves entering a new student's details into the university database to ensure accurate record-keeping and facilitate their academic journey.</p>
                        <button><Link to='/addstudent'>Add Student</Link> </button>
                    </div>
                    <div className="addstu" id="viewst">
                        <h3><i className="bi bi-person-vcard-fill"></i> View Student</h3>
                        <p>This process allows authorized users to access and review a student's information stored in the university database. This is essential for checking academic progress, verifying details, or managing administrative tasks.
                        </p>
                        <button><Link to='/viewstudent'>Virw Student</Link></button>
                    </div>
                </div>
            </div>
            <div className="container-box">
                <div className="container" id="c1"><i className="bi bi-person-fill"></i><br /><h2>ABOUT STUDENT</h2><hr /><p>A student is a person enrolled in a school or other educational institution.In the United Kingdom and most commonwealth countries, a "student" attends a secondary school or higher (e.g., college or university); those in primary or elementary schools are "pupils".</p></div>
                <div className="container" id="c2"><i className="bi bi-building"></i><br /><h2>ABOUT COLLEGE</h2><hr /><p>Both school life and college life is the most memorable time of a person's life, but both of them are quite different from each other. While in School life, we learn everything in a protected environment, College Life exposes us to a new environment where we have to learn new things and face new challenges by ourse…</p></div>
                <div className="container" id="c3"><i className="bi bi-person-workspace"></i><br /><h2>ABOUT TEACHER</h2><hr /><p>n many countries, a person who wishes to become a teacher must first obtain specified professional qualifications or credentials from a university or college. These professional qualifications may include the study of pedagogy, the science of teaching. Teachers, like other professionals, may have to, or …</p></div>
            </div>
        </div>
    );
}

export default AdminHome;