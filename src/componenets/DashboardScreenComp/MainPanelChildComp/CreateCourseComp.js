import React from "react";
import CourseFormComp from "./FormComp/CourseFormComp";


const CreateCourseComp=()=>{
    return(
        <div class="sb2-2-3">
            <div class="row">
                <div class="col-md-12">
                <div class="box-inn-sp admin-form">
                        <div class="inn-title">
                            <h4>Add New Course Informations</h4>
                            {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                        </div>
                        <div class="tab-inn">
                           <CourseFormComp></CourseFormComp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCourseComp;