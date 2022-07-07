import React,{useState} from "react";
import "../../../static/css/viewTodayClassStyle.css";

const ViewTodaysclassNameContentComp=()=>{

    const [isMouseEnter,SetMouseEnter] = useState(false);
    const HandleMouseEnter=(e)=>{
        SetMouseEnter(true);
        console.log("mouseenter");
        let Id = e.currentTarget.id;
        let IdObj = document.getElementById(Id);
        let ObClass = IdObj.className;
        console.log(ObClass);
    }
    const HandleMouseLeave=()=>{
        SetMouseEnter(false);
    }
    return(
        <div className="sb2-2-3">
            <div className="row">
                <div className="col-md-12">
                <div className="box-inn-sp admin-form">
                    
                        <div className="inn-title">
                            <h4>Your Today's Course Contents</h4>
                            
                        </div>
                        
                        <div className="tab-inn" style={{width:"90%",marginLeft:"5%"}}>
                            <h4>Your Today's className Content are as below, plese hover on docs to expand</h4>
                            <div style={{width:"100%",height:"100%",position:"relative"}}>
                                <div className="row">
                                    <div onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} className ={(isMouseEnter)?"Activate":"imageDocConatiners"} id="image1" >
                                        <img style={{width:"100%",height:"100%",position:"relative"}} src={require("../../../static/images/Docs.jpg")}></img>
                                    </div>
                                    <div onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} className ={(isMouseEnter)?"Activate":"imageDocConatiners"} id="image2" >
                                        <img style={{width:"100%",height:"100%",position:"relative"}} src={require("../../../static/images/Docs.jpg")}></img>
                                    </div>
                                    <div onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} className ={(isMouseEnter)?"Activate":"imageDocConatiners"} id="image3">
                                        <img style={{width:"100%",height:"100%",position:"relative"}} src={require("../../../static/images/Docs.jpg")}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodaysclassNameContentComp;