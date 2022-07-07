import React from "react";


const ExamDataHeader =()=>{
    const isStudent = false;
    if (isStudent) {
        return(
            <tr>
                <th>#</th>
                <th>Exam Name</th>
                <th>Start Date</th>
                <th>Start Time</th>
                <th>Duration</th>
                <th>Attend</th>
            </tr>
        )
    }else{
        return(
            <tr>
                <th>#</th>
                <th>Exam Name</th>
                <th>Start Date</th>
                <th>Start Time</th>
                <th>Duration</th>
                <th>Status</th>
            </tr>
        )
    }
}

export default ExamDataHeader;