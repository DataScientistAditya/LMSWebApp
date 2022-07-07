import React from "react";
import SendMessegeComps from "./FormComp/SendMessegeForm";
import SearchCompDashboard from "../DashboardSearchComp/DashboardSearchComp";

const CreateMessegeComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                            <h4>Send a Messege To a Member</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        
                        <div class="tab-inn">
                       
                           <SendMessegeComps></SendMessegeComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMessegeComp;