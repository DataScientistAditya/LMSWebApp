import React from "react";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "../../../../Redux/slicer";
import { selectIsStudent } from "../../../../Redux/slicer";
import { selectIsTeacher } from "../../../../Redux/slicer";


const OverViewHeadercomp=()=>{

    const IsStudent = useSelector(selectIsStudent);
    const IsTeacher = useSelector(selectIsTeacher);
    const IsAdmin = useSelector(selectIsAdmin);

    if (IsStudent) {
         return(
        <div class="db-2">
                <ul>
                    <li>
                        <div class="dash-book dash-b-1">
                            <h5>My Course</h5>
                            <h4>Python</h4>
                            {/* <a href="#">View more</a> */}
                        </div>
                    </li>
                    <li>
                        <div class="dash-book dash-b-2">
                            <h5>Upcoming Batch</h5>
                            <h4>Aug 21,2022</h4>
                            {/* <a href="#">View more</a> */}
                        </div>
                    </li>
                    <li>
                        <div class="dash-book dash-b-3">
                            <h5>Upcoming Exam</h5>
                            <h4>Oct 12,2022</h4>
                            {/* <a href="#">View more</a> */}
                        </div>
                    </li>
                    <li>
                        <div class="dash-book dash-b-4">
                            <h5>Assignment</h5>
                            <h4>Submitted</h4>
                            {/* <a href="#">View more</a> */}
                        </div>
                    </li>
                </ul>
        </div>
        )
    }else  if (IsTeacher) {
        return(
       <div class="db-2">
               <ul>
                   <li>
                       <div class="dash-book dash-b-1">
                           <h5>My Course</h5>
                           <h4>Python</h4>
                           {/* <a href="#">View more</a> */}
                       </div>
                   </li>
                   <li>
                       <div class="dash-book dash-b-2">
                           <h5>Upcoming Batch</h5>
                           <h4>Aug 21,2022</h4>
                           {/* <a href="#">View more</a> */}
                       </div>
                   </li>
                   <li>
                       <div class="dash-book dash-b-3">
                           <h5>Module</h5>
                           <h4>PY3</h4>
                           {/* <a href="#">View more</a> */}
                       </div>
                   </li>
                   <li>
                       <div class="dash-book dash-b-4">
                           <h5>Days Left</h5>
                           <h4>21</h4>
                           {/* <a href="#">View more</a> */}
                       </div>
                   </li>
               </ul>
       </div>
   )
    }else if (IsAdmin) {
        return(
            <div class="db-2">
                    <ul>
                        <li>
                            <div class="dash-book dash-b-1">
                                <h5>Total Courses</h5>
                                <h4>24</h4>
                                {/* <a href="#">View more</a> */}
                            </div>
                        </li>
                        <li>
                            <div class="dash-book dash-b-2">
                                <h5>Total Student</h5>
                                <h4>187</h4>
                                {/* <a href="#">View more</a> */}
                            </div>
                        </li>
                        <li>
                            <div class="dash-book dash-b-3">
                                <h5>Total Batch</h5>
                                <h4>56</h4>
                                {/* <a href="#">View more</a> */}
                            </div>
                        </li>
                        <li>
                            <div class="dash-book dash-b-4">
                                <h5>Total Teacher</h5>
                                <h4>16</h4>
                                {/* <a href="#">View more</a> */}
                            </div>
                        </li>
                    </ul>
            </div>
            )
    }
   
}

export default OverViewHeadercomp;