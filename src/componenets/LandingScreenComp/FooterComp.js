import React from "react";


const FooterComp=()=>{
    return(
        <section class="wed-hom-footer">
            <div class="container">
                {/* <!--<div class="row">
                    <div class="col-md-12">
                    <h4>About Wedding Planner</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    <p>more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    <p></p>
                </div>
                </div>--> */}
                <div class="row wed-foot-link">
                <div class="col-md-4 foot-tc-mar-t-o">
                        <h4>Get In Touch</h4>
                        <p>Address: 28800 Orchard Lake Road, Kolkata, India.</p>
                        <p>Phone: <a href="#!">+101-1231-4321</a></p>
                        <p>Email: <a href="#!">info@yourdomain.com</a></p>
                    </div>
                    <div class="col-md-4">
                        <h4>New Courses</h4>
                        <ul>
                            <li><a href="#">Sciences</a></li>
                            <li><a href="#">Statistics</a></li>
                            <li><a href="#">Web Design/Development</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Google Business</a></li>
                            <li><a href="#">Graphics Design</a></li>
                            <li><a href="#">Networking Courses</a></li>
                            <li><a href="#">Information technology</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>HELP & SUPPORT</h4>
                        <ul>
                            <li><a href="#">24x7 Live help</a>
                            </li>
                            <li><a href="#">Contact us</a>
                            </li>
                            <li><a href="#">Feedback</a>
                            </li>
                            <li><a href="#">FAQs</a>
                            </li>
                            <li><a href="#">Safety Tips</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row wed-foot-link-1" >
                <div class="col-md-4" style={{marginLeft:"40%"}}>
                        
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterComp;