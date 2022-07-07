import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../../Redux/slicer";
import { selectIsTeacher } from "../../../Redux/slicer";
import { selectIsStudent } from "../../../Redux/slicer";


const SidebarPanelComp=(props)=>{
    // const nav=useNavigate();

    const IsStudent = useSelector(selectIsStudent);
    const IsTeacher = useSelector(selectIsTeacher);
    const IsAdmin = useSelector(selectIsAdmin);

    const [isDispalay,SetisDispaly] = useState({display:"none"});
    const [isDispalayReport,SetisDispalyReport] = useState({display:"none"});
    // const [isDispalayEdit,SetisDispalyEdit] = useState({display:"none"});

    const DisplaySubmenu=()=>{
        if (isDispalay.display==="none") {
            SetisDispaly({display:"block"});
        }else{
            SetisDispaly({display:"none"});
        }
        
    };
    const DisplaySubmenuReport=()=>{
        if (isDispalayReport.display==="none") {
            SetisDispalyReport({display:"block"})
        }else{
            SetisDispalyReport({display:"none"})
        }
    }

  

   if (IsAdmin) {
        return(
            <div class="sb2-1" style={props.WidthPanel}>
                <div class="sb2-12">
                        <ul>
                            <li><img src={require("../../../static/images/placeholder.jpg")} alt="" />
                            </li>
                            <li>
                                <h5>Aditya<span>Admin</span></h5>
                            </li>
                            <li></li>
                        </ul>
                </div>
                <div class="sb2-13">
                        <ul class="collapsible" data-collapsible="accordion">
                            <li><a  style={{textDecoration:"none"}} onClick={props.overview} class="collapsible-header"><i class="fa fa-bar-chart" aria-hidden="true"></i> Dashboard</a>
                            </li>
                            <li><a onClick={()=>props.AllCourses(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-book" aria-hidden="true"></i> All Courses</a>
                            
                            </li>
                            <li><a onClick={()=>props.AllUser(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i>All Users</a>
                            </li>
                            <li><a onClick={()=>props.AllBatch(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-bookmark-o" aria-hidden="true"></i>All Batch</a>
                            </li>
                            <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenu} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i> Create</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalay}>
                                    <ul>
                                        <li><a onClick={()=>{props.CreateBatch(true)}} style={{textDecoration:"none",color:"white"}}>Create Batch</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateCourse(true)}} style={{textDecoration:"none",color:"white"}}>Create Course</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateUser(true)}} style={{textDecoration:"none",color:"white"}}>Create User</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateExam(true)}} style={{textDecoration:"none",color:"white"}}>Create Exam</a>
                                        </li>
                                        <li><a onClick={()=>{props.CreatePost(true)}} style={{textDecoration:"none",color:"white"}}>Create Post</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewForum(true)}} style={{textDecoration:"none",color:"white"}}>Forum</a>
                                        </li>
                                        <li><a onClick={()=>{props.SendMessege(true)}} style={{textDecoration:"none",color:"white"}}>Send Messege</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenuReport} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i>Report</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalayReport}>
                                    <ul>
                                        <li><a onClick={()=>{props.StudentReport(true)}} style={{textDecoration:"none",color:"white"}}>Student Report</a>
                                        </li>
                                        <li><a  onClick={()=>{props.TeacherReport(true)}} style={{textDecoration:"none",color:"white"}}>Teacher Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>
                </div>
            </div>
        )
   }else if (IsTeacher) {
        return(
            <div class="sb2-1" style={props.WidthPanel}>
                <div class="sb2-12">
                        <ul>
                            <li><img src={require("../../../static/images/placeholder.jpg")} alt="" />
                            </li>
                            <li>
                                <h5>Kamal<span>Teacher</span></h5>
                            </li>
                            <li></li>
                        </ul>
                </div>
                <div class="sb2-13">
                        <ul class="collapsible" data-collapsible="accordion">
                            <li><a  style={{textDecoration:"none"}} onClick={props.overview} class="collapsible-header"><i class="fa fa-bar-chart" aria-hidden="true"></i>Dashboard</a>
                            </li>
                            <li><a onClick={()=>props.AllCourses(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-book" aria-hidden="true"></i>My Courses</a>
                            
                            </li>
                            {/* <li><a onClick={()=>props.AllUser(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i>All Users</a>
                            </li> */}
                            <li><a onClick={()=>props.AllBatch(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-bookmark-o" aria-hidden="true"></i>My Batch</a>
                            </li>
                            <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenu} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i>Accessories</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalay}>
                                    <ul>
                                        <li><a onClick={()=>{props.CreateBatch(true)}} style={{textDecoration:"none",color:"white"}}>Create Batch</a>
                                        </li>
                                        <li><a onClick={()=>{props.CreateTask(true)}} style={{textDecoration:"none",color:"white"}}>Create Task</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateExam(true)}} style={{textDecoration:"none",color:"white"}}>Create Exam</a>
                                        </li>
                                        <li><a onClick={()=>{props.CreatePost(true)}} style={{textDecoration:"none",color:"white"}}>Create Post</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewForum(true)}} style={{textDecoration:"none",color:"white"}}>Forum</a>
                                        </li>
                                        <li><a onClick={()=>{props.CreateTodayCourse(true)}} style={{textDecoration:"none",color:"white"}}>Upload Content</a>
                                        </li>
                                        <li><a onClick={()=>{props.SendMessege(true)}} style={{textDecoration:"none",color:"white"}}>Send Messege</a>
                                        </li>
                                        {/* <li><a  onClick={()=>{props.CreateCourse(true)}} style={{textDecoration:"none",color:"white"}}>Create Course</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateUser(true)}} style={{textDecoration:"none",color:"white"}}>Create User</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateExam(true)}} style={{textDecoration:"none",color:"white"}}>Create Exam</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </li>
                            
                            
                            {/* <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenuReport} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i>Report</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalayReport}>
                                    <ul>
                                        <li><a onClick={()=>{props.StudentReport(true)}} style={{textDecoration:"none",color:"white"}}>Student Report</a>
                                        </li>
                                        <li><a  onClick={()=>{props.TeacherReport(true)}} style={{textDecoration:"none",color:"white"}}>Teacher Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            
                        </ul>
                </div>
            </div>
        )
   }else if (IsStudent) {
         return(
            <div class="sb2-1" style={props.WidthPanel}>
                <div class="sb2-12">
                        <ul>
                            <li><img src={require("../../../static/images/placeholder.jpg")} alt="" />
                            </li>
                            <li>
                                <h5>Stuent <span></span></h5>
                            </li>
                            <li></li>
                        </ul>
                </div>
                <div class="sb2-13">
                        <ul class="collapsible" data-collapsible="accordion">
                            <li><a  style={{textDecoration:"none"}} onClick={props.overview} class="collapsible-header"><i class="fa fa-bar-chart" aria-hidden="true"></i> Dashboard</a>
                            </li>
                            <li><a onClick={()=>props.AllCourses(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-book" aria-hidden="true"></i>My Courses</a>
                            
                            </li>
                            {/* <li><a onClick={()=>props.AllUser(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-user" aria-hidden="true"></i>All Users</a>
                            </li> */}
                            <li><a onClick={()=>props.AllBatch(true)} style={{textDecoration:"none"}} class="collapsible-header"><i class="fa fa-bookmark-o" aria-hidden="true"></i>My Batch</a>
                            </li>
                            <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenu} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i>Accessories</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalay}>
                                    <ul>
                                        
                                        <li><a onClick={()=>{props.CreatePost(true)}} style={{textDecoration:"none",color:"white"}}>Create Post</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewForum(true)}} style={{textDecoration:"none",color:"white"}}>Forum</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewExam(true)}} style={{textDecoration:"none",color:"white"}}>My Exam</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewTask(true)}} style={{textDecoration:"none",color:"white"}}>My Task</a>
                                        </li>
                                        <li><a onClick={()=>{props.ViewTodayCourse(true)}} style={{textDecoration:"none",color:"white"}}>Today Course</a>
                                        </li>
                                        <li><a onClick={()=>{props.SendMessege(true)}} style={{textDecoration:"none",color:"white"}}>Send Messege</a>
                                        </li>
                                        {/* <li><a  onClick={()=>{props.CreateCourse(true)}} style={{textDecoration:"none",color:"white"}}>Create Course</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateUser(true)}} style={{textDecoration:"none",color:"white"}}>Create User</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateExam(true)}} style={{textDecoration:"none",color:"white"}}>Create Exam</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </li>
                            {/* <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenu} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i> Create</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalay}>
                                    <ul>
                                        <li><a onClick={()=>{props.CreateBatch(true)}} style={{textDecoration:"none",color:"white"}}>Create Batch</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateCourse(true)}} style={{textDecoration:"none",color:"white"}}>Create Course</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateUser(true)}} style={{textDecoration:"none",color:"white"}}>Create User</a>
                                        </li>
                                        <li><a  onClick={()=>{props.CreateExam(true)}} style={{textDecoration:"none",color:"white"}}>Create Exam</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            {/* <li><a style={{textDecoration:"none"}} onClick={DisplaySubmenuReport} class="collapsible-header"><i class="fa fa-calendar" aria-hidden="true"></i>Report</a>
                                <div class="collapsible-body left-sub-menu" style={isDispalayReport}>
                                    <ul>
                                        <li><a onClick={()=>{props.StudentReport(true)}} style={{textDecoration:"none",color:"white"}}>Student Report</a>
                                        </li>
                                        <li><a  onClick={()=>{props.TeacherReport(true)}} style={{textDecoration:"none",color:"white"}}>Teacher Report</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            
                        </ul>
                </div>
            </div>
        )
   }
}

export default SidebarPanelComp;