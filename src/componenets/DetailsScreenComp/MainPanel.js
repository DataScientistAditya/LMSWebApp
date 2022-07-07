import React,{useState} from "react";
import ProfileHeaderComp from "./ProfileHeader";
import ProfileMainContainer from "./ProfileMainContainer";
import ExamDetailsComp from "./ExamDetailsComp.js/ExamDetails";
import CourseDetailsComp from "./CourseDetailsProfile/CourseDetailsProfile";
import { useSelector } from "react-redux";
import { selectUsername } from "../../Redux/slicer";

// import { format } from 'react-string-format';
// Student or Teacher Details Screen
const MainPanel =()=>{

    const [isExam,SetExam] = useState(false);
    const [isProfile,SetProfile] = useState(true);
    const [isCourse,SetCourse] = useState(false);
    const [isStudent, SetiStudent] = useState(false);
    const UserName = useSelector(selectUsername);
    const ExamData = [
        {
            Name:"Python",
            Start_Date:"28 May 2022",
            Start_Time:"13:00",
            Duration:"3 hr",
            Status:"Pending"
        },
        {
            Name:"React",
            Start_Date:"12 May 2022",
            Start_Time:"10:00",
            Duration:"3 hr",
            Status:"Completed"
        },
        {
            Name:"Python",
            Start_Date:"19 Oct 2022",
            Start_Time:"13:00",
            Duration:"3 hr",
            Status:"Completed"
        },
        {
            Name:"Python",
            Start_Date:"13 Aug 2022",
            Start_Time:"13:00",
            Duration:"3 hr",
            Status:"Completed"
        }
    ]
    const GetExamClicked=(data)=>{
        if (isExam===false) {
            SetProfile(false);
            SetCourse(false);
            SetExam(data);
        }
        
    };
    const GetProfileClicked=(data)=>{
        if (isProfile===false) {
            SetExam(false);
            SetCourse(false);
            SetProfile(data)
        }
    
        
    }

    const GetCourseClicked=(data)=>{
        if (isCourse===false) {
            SetExam(false);
            SetProfile(false);
            SetCourse(data);
        }
    };
    if (isExam) {
        return(
            <section>
                <div class="pro-cover">
                </div>
                <ProfileHeaderComp ExamClicked={GetExamClicked} ProfileClicked={GetProfileClicked} CourseClicked = {GetCourseClicked}></ProfileHeaderComp>
                
                <ExamDetailsComp data = {ExamData}></ExamDetailsComp>
                    
            </section>
        )
    }else if (isProfile) {
        return(
            <section>
            <div class="pro-cover">
            </div>
            <ProfileHeaderComp ExamClicked={GetExamClicked} ProfileClicked={GetProfileClicked} CourseClicked = {GetCourseClicked}></ProfileHeaderComp>
            <ProfileMainContainer 
                ProfileImage = {require("../../static/images/user.jpg")}
                Name = {UserName}
                Id = "Ert78901"
                Email = "Email@gmail.com"
                Phone = "+1 8045-236-790"
                Dob = "22-02-1998"
                Address = "15, Some Street, USA"
                Status = "Active"
                UpcomingClass = "Monday 18 Aug,2022"
                PrevClassDate = "Saturday 16 Aug, 2022"
                Attendnce = "78%"
                Batch1 = "Monday, 10:30 - 12:30"
                Batch2 = "Saturday, 14:00 - 16:30"
                ActiveModule = "Python 3"
                Course = "Python"
                >
                
            </ProfileMainContainer>
        </section>
         
        )
    }else if (isCourse) {
        return(
            <section>
                <div class="pro-cover">
                </div>
                    <ProfileHeaderComp ExamClicked={GetExamClicked} ProfileClicked={GetProfileClicked} CourseClicked = {GetCourseClicked}></ProfileHeaderComp>
                    <CourseDetailsComp></CourseDetailsComp>
            </section>
        )
    }
}

export default MainPanel;