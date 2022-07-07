import React from "react";
import SearchCompDashboard from "../../DashboardSearchComp/DashboardSearchComp";
import DetailsContent from "./DetalisCardContent/DetailsCardContent";
import { useSelector } from "react-redux";
import { selectIsStudent } from "../../../../Redux/slicer";
import { useNavigate } from "react-router-dom";


const BatchDetalisComp=(props)=>{

    const IssStudent = useSelector(selectIsStudent);
    const nav = useNavigate();

    const HandleShowTeacher=()=>{
        nav("/batchwisestudents/batch")
    }
    const List = [1,2,3,4,5,6,7,8,9]
    return(
        <div class="sb2-2-3">
            
            <div class="row">
                <div class="col-md-12">
                    <div class="box-inn-sp">
                    
                        <div class="inn-title">
                        
                            <h4>Batch Details</h4>
                            
                            
                            {/* <p>All about courses, program structure, fees, best course lists (ranking), syllabus, teaching techniques and other details.</p> */}
                            
                        </div>
                        <div class="Searchoption" style={{width:"100%",height:80, backgroundColor:"#F58610"}}>
                        <SearchCompDashboard></SearchCompDashboard>
                    </div>
                        <div class="tab-inn">
                        <div class="table-responsive table-desi">
                        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Durations</th>
                                <th>Start Date</th>
                                <th>Module</th>
                                <th>Course</th>
                                <th>Teacher</th>
                                <th># of Student</th>
                                {/* <th>{props.upcomingbatchdate}</th>
                                <th>{props.previousbatchdate}</th>
                                <th>{props.previousbatchpresent}</th>
                                <th>{props.presentpercentage}</th>
                                <th>{props.SendMessege}</th> */}
                            </tr>
                        </thead>
                        {List.map((el,i)=>{
                                return <DetailsContent 
                                Key = {i}
                                Name = "Batch Name"
                                Durations = "2 hr 30 min" 
                                Start_Date = "22.01.2022"
                                End_Date = "Python Module 2"
                                numberofmodule = "Python"
                                Activemodule = {20}
                                numberofcompletedmodule="Kamal"
                                SendMessege = {(IssStudent)?
                                    <button  style={{color:"white", backgroundColor:"#FC4500",borderRadius:10,borderColor:"#ffff"}}>All Teacher</button>:
                                    <button onClick={HandleShowTeacher} style={{color:"white", backgroundColor:"#FC4500",borderRadius:10,borderColor:"#ffff"}}>All Student</button>}
                                >

                            </DetailsContent>
                        })}
                        </table>
                        </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default BatchDetalisComp;