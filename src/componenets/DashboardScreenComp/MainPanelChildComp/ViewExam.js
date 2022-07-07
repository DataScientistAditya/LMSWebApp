import React,{useState} from "react";
import ExamAttendFormComps from "./FormComp/ExamAttendForm";


const ViewExamComp=()=>{

    const [isAttend,SetAttend] = useState(false);
    const HandleAttendExam=()=>{
        SetAttend(true);
    }
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                            <h4>Your Exam</h4>
                            
                        </div>
                        
                        <div class="tab-inn" style={{width:"90%",marginLeft:"5%"}}>
                            {(isAttend)?<p style={{color:"#DA8800"}}>You are now Attending the Exam, Dont Leave it other wise Exam will be canceled, <br/>Answer The Questions As Appear Below and Submit it</p>:
                                <p>You Have a Pending Python Exam to Attend Please Click on the Button 
                                <button onClick={HandleAttendExam} style={{color:"white", backgroundColor:"#FC4500",borderRadius:10,borderColor:"#ffff"}}>Attend</button>
                            </p>}
                            <ExamAttendFormComps AttendCliked={isAttend}></ExamAttendFormComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewExamComp;