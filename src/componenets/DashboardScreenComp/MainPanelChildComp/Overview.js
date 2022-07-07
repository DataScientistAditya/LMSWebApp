import React from "react";
import CourseDetalisComp from "./OverViewComp/Coursedetails";
import OverViewHeadercomp from "./OverViewComp/OverViewHedercomp";
import UserDetalisComp from "./OverViewComp/Userdetails";
import BatchDetalisComp from "./OverViewComp/ModuleDetails";
import CreateExamComp from "./CreateExamComp";
import CreateUserComp from "./CreateUserComp"; 
import CreateBatchComp from "./CreateBatchComp";
import CreateCourseComp from "./CreateCourseComp";
import CreateTaskComp from "./CreateTaskComp";
import CreateForumPostComp from "./CreateForumPost";
import CreateTodaysClassComp from "./CreateTodaysClass";
import CreateMessegeComp from "./CreateMessegeComp";
import ViewForumPostComp from "./Forums";
import ViewExamComp from "./ViewExam";
import ViewTaskComp from "./ViewTask";
import ViewTodaysClassContentComp from "./ViewTodaysClassContent";

import { selectIsStudent } from "../../../Redux/slicer";
import { selectIsTeacher } from "../../../Redux/slicer";
import { selectIsAdmin } from "../../../Redux/slicer";
import { useSelector } from "react-redux";



const OverviewComp=(props)=>{

    const IsStudent = useSelector(selectIsStudent);
    const IsTeacher = useSelector(selectIsTeacher);
    const IsAdmin = useSelector(selectIsAdmin);
    if (props.isBatch) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <CreateBatchComp></CreateBatchComp>
            </div>
        )
    }else if (props.isCourse){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <CreateCourseComp></CreateCourseComp>
            </div>
        )
    }else if (props.isUser){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <CreateUserComp></CreateUserComp>
            </div>
        )
    }else if (props.isExam){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <CreateExamComp></CreateExamComp>
            </div>
        )
    }else if (props.isStudent){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <UserDetalisComp ChangeText="Student"></UserDetalisComp>
            </div>
        )
    }else if (props.isTeacher){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2> */}
            {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <UserDetalisComp ChangeText="Teacher"></UserDetalisComp>
            </div>
        )
    }else if(props.isOverView){
        if (IsStudent) {
            return(
                <div class="sb2-2-1" style={props.MainPanelWidth}>
                <h2>Student Dashboard</h2>
                <p style={{position:"relative",float:"right",marginRight:10}}>Your Upcoming batch is on 25 Aug, 2022<button style={{border:"none", backgroundColor:"#CF3500",padding:5,color:"white",fontWeight:"bold",marginLeft:10, borderRadius:5}}>Join Now</button></p>
                    <OverViewHeadercomp></OverViewHeadercomp>
                    <CourseDetalisComp></CourseDetalisComp>
                    {/* <UserDetalisComp ChangeText="User"></UserDetalisComp>
                    <BatchDetalisComp></BatchDetalisComp> */}
                </div>
            )
        }else if (IsTeacher) {
            return(
                <div class="sb2-2-1" style={props.MainPanelWidth}>
                <h2>Teacher Dashboard</h2>
                <p style={{position:"relative",float:"right",marginRight:10}}>Your Upcoming batch is on 25 Aug, 2022<button style={{border:"none", backgroundColor:"#CF3500",padding:5,color:"white",fontWeight:"bold",marginLeft:10, borderRadius:5}}>Join Now</button></p>
                    <OverViewHeadercomp></OverViewHeadercomp>
                    <CourseDetalisComp></CourseDetalisComp>
                    {/* <UserDetalisComp ChangeText="User"></UserDetalisComp> */}
                    <BatchDetalisComp></BatchDetalisComp>
                </div>
            )
        }else if (IsAdmin) {
            return(
                <div class="sb2-2-1" style={props.MainPanelWidth}>
                <h2>Admin Dashboard</h2>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                    <OverViewHeadercomp></OverViewHeadercomp>
                    <CourseDetalisComp></CourseDetalisComp>
                    <UserDetalisComp ChangeText="User"></UserDetalisComp>
                    <BatchDetalisComp></BatchDetalisComp>
                </div>
            )
        }
        
    }else if(props.isAllCourse){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <CourseDetalisComp></CourseDetalisComp>
            </div>
        )
    }else if(props.isAllBatch){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            {/* <h2>Admin Dashboard</h2>
            <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <BatchDetalisComp></BatchDetalisComp>
            </div>
        )
    }else if(props.isAllUser){
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            <h2>Admin Dashboard</h2>
            {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                <UserDetalisComp ChangeText="All User"></UserDetalisComp>
            </div>
        )
    }else if (props.isTask) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
            <h2>Teacher Dashboard</h2>
            {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <CreateTaskComp></CreateTaskComp>
            </div>
        )
    }else if (props.isCreatePost) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {(IsAdmin)? <h2>Admin Dashboard</h2>:<h2>Teacher Dashboard</h2>} 
            {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
            {/* <OverViewHeadercomp></OverViewHeadercomp> */}
            {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
            <CreateForumPostComp></CreateForumPostComp>
            </div>
        )
    }else if (props.isviewForum) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <ViewForumPostComp></ViewForumPostComp>
            </div>
        )
    }else if (props.viewexam) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <ViewExamComp></ViewExamComp>
            </div>
        )
    }else if (props.viewTask) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <ViewTaskComp></ViewTaskComp>
            </div>
        )
    }else if (props.viewTodayTask) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <ViewTodaysClassContentComp></ViewTodaysClassContentComp>
            </div>
        )
    }
    else if (props.CreateTodaysClass) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <CreateTodaysClassComp></CreateTodaysClassComp>
            </div>
        )
    }else if (props.IsSendMessege) {
        return(
            <div class="sb2-2-1" style={props.MainPanelWidth}>
                {/* <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p> */}
                {/* <OverViewHeadercomp></OverViewHeadercomp> */}
                {/* <UserDetalisComp ChangeText="All User"></UserDetalisComp> */}
                <CreateMessegeComp></CreateMessegeComp>
            </div>
        )
    }
    
}

export default OverviewComp