import React from "react";


const QuickLinksComp=()=>{
    return(
        <section>
            <div class="container">
                <div class="row">
                    <div class="wed-hom-ser">
                        <ul>
                            <li>
                                <a  class="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require("../../static/images/icon/h-ic1.png")} alt=""/> Academy</a>
                            </li>
                            <li>
                                <a  class="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require("../../static/images/icon/h-ic2.png")} alt=""/> Admission</a>
                            </li>
                            <li>
                                <a  class="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require("../../static/images/icon/h-ic4.png")} alt=""/> Courses</a>
                            </li>
                            <li>
                                <a  class="waves-effect waves-light btn-large wed-pop-ser-btn"><img src={require("../../static/images/icon/h-ic3.png")} alt=""/> Seminar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuickLinksComp;