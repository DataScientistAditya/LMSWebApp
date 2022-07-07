import React from "react";
import ForumComp from "../../Forum/ForumComp";
import SearchCompDashboard from "../DashboardSearchComp/DashboardSearchComp";

const ViewForumPostComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                    
                        <div class="inn-title">
                        
                            <h4>Forum Course Community Q&A</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        <SearchCompDashboard></SearchCompDashboard>
                        <div class="tab-inn">
                        
                           <ForumComp></ForumComp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewForumPostComp;