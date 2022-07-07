import React from "react";

import CourseContentComp from "./CourseDetailsComp/CourseContentDetailsComp";
import TimeTableComp from "./CourseDetailsComp/TimeTableComp";
import ForumComp from "../Forum/ForumComp";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../Redux/slicer";
import { selectIsStudent } from "../../Redux/slicer";
import { selectIsTeacher } from "../../Redux/slicer";
import { useNavigate } from "react-router-dom";


const CourseDetailsMainComp=()=>{
    const IsAdmin = useSelector(selectIsAdmin);
    const IsTeacher = useSelector(selectIsTeacher);
    const IsStudent = useSelector(selectIsStudent);
    const nav = useNavigate();
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
                                    <h2>Python</h2>
                                    <span>Category: Software Testing</span>
                                    <div class="share-btn">
                                        <ul>
                                            {/* <li><a href="#"><i class="fa fa-facebook fb1"></i> Share On Facebook</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-twitter tw1"></i> Share On Twitter</a>
                                            </li>
                                            <li><a href="#"><i class="fa fa-google-plus gp1"></i> Share On Google Plus</a>
                                            </li> */}
                                            {(IsTeacher || IsAdmin)?<li><button onClick={()=>{nav("/courseedit/course")}} class="waves-effect waves-light btn-large sdb-btn sdb-btn-edit"><i class="fa fa-pencil"></i>Edit Course</button>
                                            </li>:<li><button class="waves-effect waves-light btn-large sdb-btn sdb-btn-edit">Join Course</button>
                                            </li> }
                                            
                                        </ul>
                                    </div>
                                </div>
                                <div class="cor-p4">
                                    <h3>Course Details:</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
                                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                                        this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                                        Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <CourseContentComp></CourseContentComp>
                                <TimeTableComp></TimeTableComp>
                                <ForumComp></ForumComp>
                                <div class="cor-p6">
                                    <h3>Post a Question</h3>
                                    <div class="cor-p7-revi">
                                        <form class="col s12">
                                            <div class="row">
                                                <div class="input-field col s6">
                                                    <input type="text" class="validate"/>
                                                    <label>Name</label>
                                                </div>
                                                <div class="input-field col s6">
                                                    <input type="text" class="validate"/>
                                                    <label>Email id</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <textarea class="materialize-textarea"></textarea>
                                                    <label>Your Question</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="input-field col s12">
                                                    <input type="submit" value="Submit" class="waves-effect waves-light btn-book"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default CourseDetailsMainComp;