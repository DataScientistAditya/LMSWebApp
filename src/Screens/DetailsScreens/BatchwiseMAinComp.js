import React from "react";
import BatchWiseUser from "../../componenets/DetailsScreenComp/BatchWiseStudentDetailscomp/BatchWiseStudentsComp";


const BatchWiseDetailsMainComp=()=>{
   
    
    return(
        <section>
            <div class="container com-sp pad-bot-70 pg-inn">
                <div class="row">
                    <div class="cor">
                        <div class="col-md-3">
                            <div class="cor-side-com">
                                <div class="">
                                    <div class="de-left-tit">
                                        <h4>Upcoming Event</h4>
                                    </div>
                                </div>
                                <div class="ho-event">
                                    <ul>
                                        <li>
                                            <div class="ho-ev-link ho-ev-link-full">
                                                <a href="#">
                                                    <h4>Workshop PHP</h4>
                                                </a>
                                                <p>Nulla at velit convallis venenatis.</p>
                                                <span>9:15 am – 5:00 pm</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ho-ev-link ho-ev-link-full">
                                                <a href="#">
                                                    <h4>Workshop PHP</h4>
                                                </a>
                                                <p>Nulla at velit convallis venenatis.</p>
                                                <span>9:15 am – 5:00 pm</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ho-ev-link ho-ev-link-full">
                                                <a href="#">
                                                    <h4>Workshop PHP</h4>
                                                </a>
                                                <p>Nulla at velit convallis venenatis.</p>
                                                <span>9:15 am – 5:00 pm</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ho-ev-link ho-ev-link-full">
                                                <a href="#">
                                                    <h4>Workshop PHP</h4>
                                                </a>
                                                <p>Nulla at velit convallis venenatis.</p>
                                                <span>9:15 am – 5:00 pm</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="cor-mid-img">
                                <img src={require("../../static/images/PythonCourseImg.jpg")} alt=""/>
                            </div>
                            <div class="cor-con-mid">
                                <div class="cor-p1">
                                    <h2>Batch Name</h2>
                                    <span>Subject: Python</span>
                                   
                                </div>
                                
                                
                                <BatchWiseUser></BatchWiseUser>
                            </div>
                        </div>
                        <div class="col-md-3">
                            
                            <div class="cor-side-com">
                                <div class="ho-ev-latest ho-ev-latest-bg-2">
                                    <div class="ho-lat-ev">
                                        <a style={{textDecoration:"none"}}  href="#">
                                            <h4>Total Student</h4>
                                            <p>235</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="ho-ev-latest in-ev-latest-bg-1">
                                    <div class="ho-lat-ev">
                                        <a style={{textDecoration:"none"}} href="#">
                                            <h4># Modules</h4>
                                            <p>3</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="ho-ev-latest in-ev-latest-bg-1">
                                    <div class="ho-lat-ev">
                                        <a style={{textDecoration:"none"}} href="#">
                                            <h4>Upcoming Batch</h4>
                                            <p>Mon 25 Aug, 2022</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BatchWiseDetailsMainComp;