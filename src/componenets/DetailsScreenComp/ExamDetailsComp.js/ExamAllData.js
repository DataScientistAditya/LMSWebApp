import React from "react";


const ExamRowsofData=(props)=>{

   
    return(
        <tr key={props.Key}>
            <td>{props.Number}</td>
            <td>{props.Name}</td>
            <td>{props.Start_Date}</td>
            <td>{props.Start_Time}</td>
            <td>{props.Duration}</td>
            <td><a style={{textDecoration:"none"}} class="ad-st-view">{props.SetStaus}</a></td>
        </tr>
    )
   
}

export default ExamRowsofData;