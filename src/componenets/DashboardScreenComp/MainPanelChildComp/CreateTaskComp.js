import React from "react";
import TaskFormComps from "./FormComp/TaskFormcomp";


const CreateTaskComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                            <h4>Add New Task Informations</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        
                        <div class="tab-inn">
                            
                           <TaskFormComps></TaskFormComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTaskComp;