import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { setSignin } from "../../../Redux/slicer";
import { useNavigate } from "react-router-dom"; 

const Users=[
    {
        email:"aditya@gmail.com",
        password:"#Aditya",
        token:"sf3rr36778refeg",
        isStudent:false,
        isTeacher:false,
        isAdmin:true,
        username:"Aditya"


    },
    {
        email:"kamal@gmail.com",
        password:"#Kamal",
        token:"fewwrr36778refeg",
        isStudent:false,
        isTeacher:true,
        isAdmin:false,
        username:"Kamal"
    },
    {
        email:"student@gmail.com",
        password:"#Student",
        token:"sf3rwwd78refeg",
        isStudent:true,
        isTeacher:false,
        isAdmin:false,
        username:"Student"
    },

]

const AuthComp=(props)=>{
    const [isForgotPass,SetForgotPass] = useState(false);
    const [Email,SetEmail]  =useState("");
    const [Messege,SetMessege] = useState("");
    const [Password,SetPassword]  =useState("");

    const nav = useNavigate()
    const dispatch = useDispatch();
    const SetClosePopUp=()=>{
        props.CloseLoginPopUp(false);
        SetForgotPass(false);
    };
    const GetisForgotPassPressed=()=>{
        SetForgotPass(true);
    };

    const HandleUserInput=(e)=>{
        SetEmail(e.target.value);
    };
    const HandlePassword =(e)=>{
        SetPassword(e.target.value);
    };
    const HandleLogin=()=>{
        if (Email !== "" && Password !== "") {
            Users.map((resp)=>{
                if (resp.email === Email && resp.password === Password) {
                    dispatch(setSignin({
                        isloggedin:true,
                        isStudent:resp.isStudent,
                        isTeacher:resp.isTeacher,
                        isAdmin:resp.isAdmin,
                        usertoken:resp.token,
                        username:resp.username,
                    }));

                    nav("/dashboard");
                }else{
                    SetMessege("No User Found");
                }
            })
        }
    }
    return(
        <section>
            {/* Login Section */}
            <div id="modal1" class="modal Show" style={(props.isLoggedInPressed )? {display:"block"}:{display:"none"}} role="dialog">
                <div class="log-in-pop">
                    <div class="log-in-pop-left">
                        <h1 style={{marginBottom:15}}>Hello...</h1>
                        <p>Welcome to LMS, We have already sent you an email with your login credentils, Please Login with email and password.</p>
                        <h4>Contact us on Social</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                            </li>
                           
                            <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="log-in-pop-right">
                        <a  onClick={SetClosePopUp} class="pop-close" data-dismiss="modal"><img src={require("../../../static/images/cancel.png")} alt="" />
                        </a>
                            <h4 style={{fontWeight:"bold",color:"#646464"}}>Login</h4>
                            {/* <p>Don't have an account? Create your account. It's take less then a minutes</p> */}
                            <p>{Messege}</p>
                        <form class="s12" onSubmit={HandleLogin}>
                            <div>
                                <div class="input-field s12">
                                    <input type="email" data-ng-model="name" class="validate" onChange={HandleUserInput} />
                                    <label>User name</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12">
                                    <input type="password" class="validate" onChange={HandlePassword} />
                                    <label>Password</label>
                                </div>
                            </div>
                            <div>
                                <div class="s12 log-ch-bx">
                                    <p>
                                        <input type="checkbox" id="test5" />
                                        <label for="test5">Remember me</label>
                                    </p>
                                </div>
                            </div>
                            <div>
                                    <div class="input-field s4" style={{height:30}}>
                                        <button type="submit" style={{
                                                width:"100%",
                                                height:"100%",
                                                backgroundColor:"#D20029", 
                                                color:"white",
                                                fontFamily:"sans-serif",
                                                fontSize:15,
                                                fontWeight:"bold",
                                                borderRadius:10,
                                                borderColor:"wheat",
                                                borderWidth:1,
                                                borderStyle:"solid"}}>Login</button>
                                    </div>
                                </div>
                            <div>
                                <div class="input-field s12"> <a style={{fontSize:12, textDecoration:"none"}} onClick={GetisForgotPassPressed} data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</a>  </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Register Section */}
            <div id="modal2" class="modal fade" role="dialog">
                <div class="log-in-pop">
                    <div class="log-in-pop-left">
                        <h1>Hello...</h1>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>
                        <h4>Login with social media</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                            </li>
                            <li><a href="#"><i class="fa fa-google"></i> Google+</a>
                            </li>
                            <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="log-in-pop-right">
                        <a href="#" class="pop-close" data-dismiss="modal"><img src="images/cancel.png" alt="" />
                        </a>
                        <h4>Create an Account</h4>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>
                        <form class="s12">
                            <div>
                                <div class="input-field s12">
                                    <input type="text" data-ng-model="name1" class="validate" />
                                    <label>User name</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12">
                                    <input type="email" class="validate"/>
                                    <label>Email id</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12">
                                    <input type="password" class="validate"/>
                                    <label>Password</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s12">
                                    <input type="password" class="validate"/>
                                    <label>Confirm password</label>
                                </div>
                            </div>
                            <div>
                                <div class="input-field s4">
                                    <input type="submit" value="Register" class="waves-effect waves-light log-in-btn"/> </div>
                            </div>
                            <div>
                                <div class="input-field s12"> <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</a> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Forget Password */}
            <div id="modal3" class="modal forgotpass" style={(isForgotPass)? {display:"block"}: {display:"none"}} role="dialog">
                <div class="log-in-pop">
                    <div class="log-in-pop-left">
                        <h1>Hello... </h1>
                        <p>Welcome to LMS, We have already sent you an email with your login credentils, Please use the email</p>
                        <h4>Connect with us on social media</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
                            </li>
                            {/* <li><a href="#"><i class="fa fa-google"></i> Google+</a>
                            </li> */}
                            <li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="log-in-pop-right">
                        <a  onClick={SetClosePopUp} class="pop-close" data-dismiss="modal"><img src={require("../../../static/images/cancel.png")} alt="" />
                        </a>
                        <h4>Forgot password</h4>
                        <p>Don't have an account? Create your account. It's take less then a minutes</p>
                        <form class="s12">
                            <div>
                                <div class="input-field s12">
                                    <input type="text" data-ng-model="name3" class="validate" />
                                    <label>email id</label>
                                </div>
                            </div>
                            <div>
                            <div class="input-field s4" style={{height:30}}>
                                        <button type="submit" style={{
                                                width:"100%",
                                                height:"100%",
                                                backgroundColor:"#D20029", 
                                                color:"white",
                                                fontFamily:"sans-serif",
                                                fontSize:15,
                                                fontWeight:"bold",
                                                borderRadius:10,
                                                borderColor:"wheat",
                                                borderWidth:1,
                                                borderStyle:"solid"}}>Reset</button>
                                    </div>
                            </div>
                            
                            {/* <div>
                                <div class="input-field s12"> <a onClick={SetisLoggedinTrue} style={{fontSize:12, textDecoration:"none",cursor:"pointer"}} data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</a> </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AuthComp;