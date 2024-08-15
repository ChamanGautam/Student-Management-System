import Home from "./Students/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Students/About";
import Login from "./Students/Login";
import AdminHome from "./Students/AdminHome";
import AddStudent from "./Students/AddStudent";
import ApplyStudent from "./Students/ApplyStudent";
import ViewStudent from "./Students/ViewStudent";
import ViewAppliedStudent from "./Students/ViewAppliedStudent";
import Student from "./Students/Student";
import EditStudent from "./Students/EditStudent";
import EditAppliedStudent from "./Students/EditAppliedStudent";
import AppliedStudent from "./Students/AppliedStudent";


const App = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/> 
                <Route path="/adminhome" element={<AdminHome />}/> 
                <Route path="/addstudent" element={<AddStudent />}/> 
                <Route path="/applystudent" element={<ApplyStudent/>}/>
                <Route path="/viewstudent" element={<ViewStudent />}/> 
                <Route path="viewappliedstudent" element={<ViewAppliedStudent />}/>
                <Route path="/student/:id" element={<Student />}/> 
                <Route path="/appliedstudent/:id" element={<AppliedStudent />}/> 
                <Route path="/editstudent/:id" element={<EditStudent />}/> 
                <Route path="/editappliedstudent/:id" element={<EditAppliedStudent />}/> 
            </Routes>
            
        </div>
    );
}

export default App;