import React,{useState} from "react";
import MobileScreenComp from "../../componenets/LandingScreenComp/MobileScreencomp";
import LandingHeaderComp from "../../componenets/LandingScreenComp/HeaderSection";
import SliderComp from "../../componenets/LandingScreenComp/SliderComp";
import QuickLinksComp from "../../componenets/LandingScreenComp/QuickLinks";
import DiscoverComp from "../../componenets/LandingScreenComp/DiscoverComp";
import PopularCourseComp from "../../componenets/LandingScreenComp/PopulerCoursecomp";
import UpcomingNewsComp from "../../componenets/LandingScreenComp/NewsComp";
import FooterComp from "../../componenets/LandingScreenComp/FooterComp";
import AuthComp from "../../componenets/LandingScreenComp/AuthenticationComp/AuthComp";

// importing Static Files
import "../../static/css/font-awesome.min.css";
import "../../static/css/materialize.css";
import "../../static/css/bootstrap.css";
import "../../static/css/style.css";
import "../../static/css/style-mob.css";

const LandingScreen=()=>{
    const [isLoginPressed,SetLoginPressed]= useState(false);

    const GetIsLoginPressed=(data)=>{
        SetLoginPressed(data);
        //console.log(data);
    }
    const GetIsCloseLoginPopup=(data)=>{
        SetLoginPressed(data)
    }
    return(
        <div>
            <MobileScreenComp></MobileScreenComp>
            <LandingHeaderComp onSignin={GetIsLoginPressed}></LandingHeaderComp>
            <SliderComp></SliderComp>
            <QuickLinksComp></QuickLinksComp>
            {/* <DiscoverComp></DiscoverComp>
            <PopularCourseComp></PopularCourseComp>
            <UpcomingNewsComp></UpcomingNewsComp> */}
            <FooterComp></FooterComp>
            <AuthComp isLoggedInPressed={isLoginPressed} CloseLoginPopUp={GetIsCloseLoginPopup}></AuthComp>
        </div>
    )
}

export default LandingScreen;