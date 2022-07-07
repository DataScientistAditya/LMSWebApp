import React from "react";


const MobileScreenComp=()=>{
    return(
        <section>
        <div class="ed-mob-menu">
            <div class="ed-mob-menu-con">
                <div class="ed-mm-left">
                    <div class="wed-logo">
                        <a href="index-2.html"><img src="images/logo.png" alt="" />
						</a>
                    </div>
                </div>
                <div class="ed-mm-right">
                    <div class="ed-mm-menu">
                        <a href="#!" class="ed-micon"><i class="fa fa-bars"></i></a>
                        <div class="ed-mm-inn">
                            <a href="#!" class="ed-mi-close"><i class="fa fa-times"></i></a>
                            <h4>Home</h4>
                            <h4>User Account</h4>
                            <ul>
                                <li><a href="#!" data-toggle="modal" data-target="#modal1">Sign In</a></li>
                                {/* <li><a href="#!" data-toggle="modal" data-target="#modal2">Register</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MobileScreenComp;