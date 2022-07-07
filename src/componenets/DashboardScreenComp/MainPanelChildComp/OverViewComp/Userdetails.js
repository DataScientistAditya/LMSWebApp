import React from "react";
import SearchCompDashboard from "../../DashboardSearchComp/DashboardSearchComp";
import DetailsContent from "./DetalisCardContent/DetailsCardContent";
import { useNavigate } from "react-router-dom";
import { format } from 'react-string-format';

const UserDetalisComp=(props)=>{
    const List = [1,2,3,4,5,6,7,8,9]
    const nav = useNavigate();
    return(
        <div class="sb2-2-3">
            
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-inn-sp">
                            
                                <div class="inn-title">
                                
                                    <h4>{props.ChangeText} Details</h4>
                                    
                                    
                                    {/* <p>All about courses, program structure, fees, best course lists (ranking), syllabus, teaching techniques and other details.</p> */}
                                    
                                </div>
                                <div class="Searchoption" style={{width:"100%",height:80, backgroundColor:"#F58610"}}>
                                <SearchCompDashboard></SearchCompDashboard>
                            </div>
                                <div class="tab-inn">
                                <div class="table-responsive table-desi">
                                <table class="table table-hover" >
                                <thead >
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Module</th>
                                        
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
                                        Name = "Student"
                                        Durations = {<p style={{fontSize:10}}>StudentName@gmail.com</p>}
                                        Start_Date = "Python"
                                        End_Date = "Module 3"
                                      
                                        SendMessege = {<button onClick={()=>{nav("/details/user")}} style={{color:"white", backgroundColor:"#FC4500",borderRadius:10,borderColor:"#ffff"}}>Contact</button>}
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

export default UserDetalisComp;