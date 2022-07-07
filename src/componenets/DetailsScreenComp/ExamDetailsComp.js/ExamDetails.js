import React from "react";
import ExamDataHeader from "./ExamDataRows";
import ExamRowsofData from "./ExamAllData";
import { useSelector } from "react-redux";
import { selectIsStudent } from "../../../Redux/slicer";

const ExamDetailsComp=(props)=>{
    const isStudent = useSelector(selectIsStudent);
    const Data = props.data
    console.log(Data);
    return(
                <div class="sb2-2-3">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="box-inn-sp">
                                    <div class="inn-title">
                                        <h4>Exams Time Table</h4>
                                        <p>All about students like name, student id, phone, email, country, city and more</p>
                                    </div>
                                    <div class="tab-inn">
                                        <div class="table-responsive table-desi">
                                            <table class="table table-hover">
                                                <thead>
                                                    {(isStudent)?<tr>
                                                                    <th>#</th>
                                                                    <th>Exam Name</th>
                                                                    <th>Start Date</th>
                                                                    <th>Start Time</th>
                                                                    <th>Duration</th>
                                                                    <th>Attend</th>
                                                                </tr>
                                                                : <tr>
                                                                        <th>#</th>
                                                                        <th>Exam Name</th>
                                                                        <th>Start Date</th>
                                                                        <th>Start Time</th>
                                                                        <th>Duration</th>
                                                                        <th>Status</th>
                                                                    </tr>}
                                                                
                                                </thead>
                                                <tbody>
                                                    {(isStudent)? Data.map((el,i)=>{
                                                        return(
                                                            <ExamRowsofData 
                                                                key={i}
                                                                Number={i+1}
                                                                Name = {el.Name}
                                                                Start_Date = {el.Start_Date}
                                                                Start_Time = {el.Start_Time}
                                                                Duration = {el.Duration}
                                                                SetStaus = "Attend">
                                                                
                                                        </ExamRowsofData>
                                                        )}) :Data.map((el,i)=>{
                                                        return(
                                                            <ExamRowsofData 
                                                                key={i}
                                                                Number={i+1}
                                                                Name = {el.Name}
                                                                Start_Date = {el.Start_Date}
                                                                Start_Time = {el.Start_Time}
                                                                Duration = {el.Duration}
                                                                SetStaus = {el.Status}>
                                                                
                                                        </ExamRowsofData>
                                                        )})}
                                                 
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
           
      
    )
}

export default ExamDetailsComp;