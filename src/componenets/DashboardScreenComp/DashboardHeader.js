import React,{useState, useEffect} from "react";
import SearchCompDashboard from "./DashboardSearchComp/DashboardSearchComp";
import { selectUsername } from "../../Redux/slicer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from 'react-string-format';
import { setSignOut } from "../../Redux/slicer";
import { useDispatch } from "react-redux";


import { selectIsTeacher } from "../../Redux/slicer";
import { selectIsStudent } from "../../Redux/slicer";


const DashBoardHeader=(props)=>{
    
    const [isMyProfileClicked,SetMyProfileClicked] = useState(false);
    const [isMessegeClicked,SetMessegeClicked] = useState(false);
    const [isMsg, SetMsgClicked] = useState({});
    const Username = useSelector(selectUsername);
    const nav = useNavigate();
    const IsTeacher = useSelector(selectIsTeacher);
    const IsStudent = useSelector(selectIsStudent);
    const dispather = useDispatch();
    
    const HandleProfile=()=>{

        const url = format("/details/{0}",Username)
        nav(url);
    };
    const HandleSignOut=()=>{
        dispather(setSignOut());
        nav("/");
    };

    const MessegeHandler=()=>{
        if (isMessegeClicked) {
            SetMessegeClicked(false);
        }else{
            SetMessegeClicked(true);
        }
    };

   useEffect(()=>{
    props.PassData(isMsg);

   },[isMsg])


    return(
        <div class="container-fluid sb1">
        <div class="row">
            {/* <!--== LOGO ==--> */}
            
            <div class="col-md-2 col-sm-3 col-xs-6 sb1-1">
                
                <a href="#" class="btn-close-menu"><i class="fa fa-times" aria-hidden="true"></i></a>
                <a href="#" class="atab-menu"><i class="fa fa-bars tab-menu" aria-hidden="true"></i></a>
                <a  class="logo"><img src={require("../../static/images/logo-3.png")} alt="" />
                
                </a>
                <div class="openclosebutton" style={{display:"block",width:20, height:20,overflow:"hidden"}}>
                    <a onClick={()=>{props.SidebarClicked(true)}}><img style={{width:"100%", height:"100%"}} src={require("../../static/images/three-bars-icon-6.jpg")}></img></a>
                </div>
            </div>
            {/* <!--== SEARCH ==--> */}
            <SearchCompDashboard></SearchCompDashboard>
            {/* <!--== NOTIFICATION ==--> */}
            <div class="col-md-2 tab-hide">
              
                <div class="top-not-cen">
                    {/* <a class='waves-effect btn-noti'  title="all enquiry messages"><i class="fa fa-commenting-o" aria-hidden="true"></i><span>5</span></a> */}
                    <a onClick={MessegeHandler}  class='waves-effect btn-noti'  title="course booking messages"><i class="fa fa-envelope-o" aria-hidden="true"></i><span>5</span></a>


                        <ul id='top-menu' class={(isMessegeClicked)?'dropdown-content top-menu-sty active':'dropdown-content top-menu-sty'} style={(isMessegeClicked)?{display:"block",backgroundColor:"whitesmoke",position:"absolute",height:200,overflowY:"auto",opacity:1,marginTop:50}:{display:"none"}}>
                           
                            <li onClick={
                                ()=>
                                {SetMsgClicked({"data":{"Key":1,"msg":"hello"},"isclicked":true}); 
                                }}><a style={{textDecoration:"none"}}  class="waves-effect"><img style={{width:20, height:20,borderRadius:20,borderWidth:5,borderColor:"white",marginRight:15}} src={require("../../static/images/user/1.png")}></img>Aditya Chakraborty</a>
                            </li>
                            <li class="divider"></li>
                            <li  onClick={
                                ()=>
                                {SetMsgClicked({"data":{"Key":2,"msg":"hello"},"isclicked":true}); 
                                }} ><a style={{textDecoration:"none"}}  class="waves-effect"><img style={{width:20, height:20,borderRadius:20,borderWidth:5,borderColor:"white",marginRight:15}} src={require("../../static/images/user/2.png")}></img>Santanu Das</a>
                            </li>
                            <li class="divider"></li>
                            <li  onClick={
                                ()=>
                                {SetMsgClicked({"data":{"Key":3,"msg":"hello"},"isclicked":true}); 
                                }}><a style={{textDecoration:"none"}}  class="waves-effect"><img style={{width:20, height:20,borderRadius:20,borderWidth:5,borderColor:"white",marginRight:15}} src={require("../../static/images/user/3.png")}></img>Akanksha Dillon</a>
                            </li>
                            <li class="divider"></li>
                            <li  onClick={
                                ()=>
                                {SetMsgClicked({"data":{"Key":4,"msg":"hello"},"isclicked":true}); 
                                }}><a style={{textDecoration:"none"}}  class="waves-effect"><img style={{width:20, height:20,borderRadius:20,borderWidth:5,borderColor:"white",marginRight:15}} src={require("../../static/images/user/4.png")}></img>Kavin Galler</a>
                            </li>
                        </ul>
                    {/* <a class='waves-effect btn-noti'  title="admission enquiry"><i class="fa fa-tag" aria-hidden="true"></i><span>5</span></a> */}
                </div>
            </div>
            {/* <!--== MY ACCCOUNT ==--> */}
            <div class="col-md-2 col-sm-3 col-xs-6">
                {/* <!-- Dropdown Trigger --> */}
                <a onClick={()=>{(isMyProfileClicked)?SetMyProfileClicked(false)
                    :SetMyProfileClicked(true)}} 
                    class={(isMyProfileClicked)?
                    'waves-effect dropdown-button top-user-pro active':'waves-effect dropdown-button top-user-pro'}
                     style={{textDecoration:"none"}}
                      href='#' data-activates='top-menu'>
                        <img src={require("../../static/images/user/6.png")} alt="" />My Profile</a>
                
                {/* <!-- Dropdown Structure --> */}
                <ul id='top-menu' class={(isMyProfileClicked)?'dropdown-content top-menu-sty active':'dropdown-content top-menu-sty'} style={(isMyProfileClicked)?{display:"block",position:"absolute",opacity:1,marginTop:50}:{display:"none"}}>
                    {(IsStudent || IsTeacher)?<li><a onClick={HandleProfile} class="waves-effect"><i class="fa fa-cogs" aria-hidden="true"></i>My Profile</a>
                    </li>:<p></p>}
                    {(IsStudent || IsTeacher)?<li class="divider"></li>:<p></p>}
                    <li><a onClick={HandleSignOut}  class="ho-dr-con-last waves-effect"><i class="fa fa-sign-in" aria-hidden="true"></i> Logout</a>
                    </li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}

export default DashBoardHeader;