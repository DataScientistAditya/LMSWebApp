import React from "react";
import MobileScreenComp from "../../componenets/LandingScreenComp/MobileScreencomp";
import LandingHeaderComp from "../../componenets/LandingScreenComp/HeaderSection";
import MainPanel from "../../componenets/DetailsScreenComp/MainPanel";
import FooterComp from "../../componenets/LandingScreenComp/FooterComp";

const DetailsScreen=()=>{
    return(
        <div>
            <MobileScreenComp></MobileScreenComp>
            <LandingHeaderComp></LandingHeaderComp>
            <MainPanel></MainPanel>
            <FooterComp></FooterComp>
        </div>
    )
}


export default DetailsScreen;