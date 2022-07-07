import React from "react";
import CreateTodaysClassFormComps from "./FormComp/TodaysClassForm";


const CreateTodaysClassComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                            <h4>Create Today's Class Contents</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        
                        <div class="tab-inn">
                            
                           <CreateTodaysClassFormComps></CreateTodaysClassFormComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodaysClassComp;