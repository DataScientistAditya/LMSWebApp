import React from "react";
import MobileScreenComp from "../../componenets/LandingScreenComp/MobileScreencomp";
import LandingHeaderComp from "../../componenets/LandingScreenComp/HeaderSection";
import FooterComp from "../../componenets/LandingScreenComp/FooterComp";

import UserEditFormComps from "../../componenets/DashboardScreenComp/MainPanelChildComp/FormComp/UserEditFormComp";


const EditProfileScreen=()=>{
    return(
        <div>
            <MobileScreenComp></MobileScreenComp>
            <LandingHeaderComp></LandingHeaderComp>
            <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                        <div class="inn-title">
                            <h4>Update Your Informations</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        <div class="tab-inn">
                           <UserEditFormComps></UserEditFormComps>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <FooterComp></FooterComp>
        </div>
    )
}

export default EditProfileScreen;