import React from "react";
import MainPanelComp from "../../componenets/DashboardScreenComp/MainPanel";
import { selectIsLoggedIn } from "../../Redux/slicer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// importing Static Files
import "../../static/css/font-awesome.min.css";
import "../../static/css/materialize.css";
import "../../static/css/bootstrap.css";
import "../../static/css/style.css";
import "../../static/css/style-mob.css";


const DashboardScreen=()=>{
    const IsLoggedIn = useSelector(selectIsLoggedIn);
    const nav = useNavigate();
    if (IsLoggedIn) {
        return(
            <MainPanelComp></MainPanelComp>

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

export default DashboardScreen;