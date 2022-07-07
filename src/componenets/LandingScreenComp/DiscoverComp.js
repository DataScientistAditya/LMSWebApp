import React, { useDeferredValue } from "react";



const DiscoverComp=()=>{
    return(
        <section>
            <div class="container com-sp pad-bot-70">
                <div class="row">
                    <div class="con-title">
                        <h2>Discover <span>More</span></h2>
                        <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="ed-course">
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="about.html">
                                    <img src={require("../../static/images/h-about.jpg")} alt=""/>
                                    <span>Academics</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="admission.html">
                                    <img src={require("../../static/images/h-adm1.jpg")} alt=""/>
                                    <span>Admission</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="dashboard.html">
                                    <img src={require("../../static/images/h-cam.jpg")} alt=""/>
                                    <span>Students profile</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="research.html">
                                    <img src={require("../../static/images/h-res.jpg")} alt=""/>
                                    <span>Research & Education</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="all-courses.html">
                                    <img src={require("../../static/images/h-about1.jpg")} alt=""/>
                                    <span>Couse</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="db-time-line.html">
                                    <img src={require("../../static/images/h-adm.jpg")} alt=""/>
                                    <span>Exam Time Line</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="seminar.html">
                                    <img src={require("../../static/images/h-cam1.jpg")} alt=""/>
                                    <span>Seminar 2018</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12">
                            <div class="ed-course-in">
                                <a class="course-overlay" href="events.html">
                                    <img src={require("../../static/images/h-res1.jpg")} alt=""/>
                                    <span>Research & Education</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscoverComp;