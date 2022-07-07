import React from "react";
import LandingHeaderComp from "../../componenets/LandingScreenComp/HeaderSection";
import MobileScreenComp from "../../componenets/LandingScreenComp/MobileScreencomp";
import BatchWiseDetailsMainComp from "./BatchwiseMAinComp";
import FooterComp from "../../componenets/LandingScreenComp/FooterComp";
import { selectIsLoggedIn } from "../../Redux/slicer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const BatchWiseModuleDetailsScreen=()=>{

    const IsLoggedIn = useSelector(selectIsLoggedIn);
    const nav = useNavigate();
    if (IsLoggedIn) {
        return(
            <div>
                <MobileScreenComp></MobileScreenComp>
                <LandingHeaderComp></LandingHeaderComp>
                <BatchWiseDetailsMainComp></BatchWiseDetailsMainComp>
                <FooterComp></FooterComp>
            </div>
        )
    }else{
        return(
            <div style={{width:"100%", height:"100vh",position:"absolute"}}>
            <div style={{width:"50%", height:"50%",top:"25%",left:"25%"}}>
                <h1>404 Not Found, Perhaps you are not a Authentic User</h1>
                <h4>Please Login  <a onClick={()=>{nav("/")}} style={{textDecoration:"None"}}>here</a></h4>
            </div>
        </div>
        )
    }
}


export default BatchWiseModuleDetailsScreen;