import React from "react";
import ExamFormComps from "./FormComp/ExamFormComp";


const CreateExamComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                            <h4>Add New Exam Informations</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        
                        <div class="tab-inn">
                            
                           <ExamFormComps></ExamFormComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateExamComp;