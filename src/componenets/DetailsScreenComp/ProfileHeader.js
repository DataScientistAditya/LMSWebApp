import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileHeaderComp=(props)=>{
    const nav = useNavigate(props);
    return(
        <div class="pro-menu">
            <div class="container">
                <div class="col-md-9 col-md-offset-3">
                    <ul>
                        <li><a style={{textDecoration:"none"}} onClick={()=>nav("/dashboard")}>My Dashboard</a></li>
                        <li><a style={{textDecoration:"none"}} onClick={()=>{props.ProfileClicked(true)}} class="pro-act">Profile</a></li>
                        <li><a style={{textDecoration:"none"}} onClick={()=>{props.CourseClicked(true)}}>Courses</a></li>
                        <li><a style={{textDecoration:"none"}} onClick={()=>{props.ExamClicked(true)}}>Exams</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default ProfileHeaderComp;