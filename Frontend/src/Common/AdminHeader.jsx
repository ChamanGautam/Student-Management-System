import './AdminHeader.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function Logout() {
        localStorage.clear();
        alert("Are you sure you want to logout?");
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="adheader-base">
            <div className="adheader-main">
                <button className="adheader-toggle" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
                <ul className={`adheader-menu ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/adminhome"><i className="bi bi-house-door-fill"></i> Home</Link></li>
                    <li><Link to="/addstudent"><i className="bi bi-person-plus-fill"></i> Add Student</Link></li>
                    <li><Link to="/viewstudent"><i className="bi bi-person-vcard-fill"></i> View Student</Link></li>
                    <li><Link to="/" onClick={Logout}><i className="bi bi-box-arrow-right"></i> Log Out</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminHeader;
