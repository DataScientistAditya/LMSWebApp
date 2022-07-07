import React from "react";

import { format } from 'react-string-format';
const DetailsContent=(props)=>{

    
    // const url  = format("/coursedetails/{0}",)
    return(
       
            <tbody key={props.Key} onClick={props.RouteName}>
                <tr  >
                    <td><span class="list-img"><img src={require("../../../../../static/images/course/sm-1.jpg")} alt="" /></span>
                    </td>
                    <td><a ><span class="list-enq-name">{props.Name}</span><span class="list-enq-city">Illunois, United States</span></a>
                    </td>
                    <td>{props.Durations}</td>
                    <td>{props.Start_Date}</td>
                    <td>{props.End_Date}</td>
                    <td>{props.numberofmodule}</td>
                    <td>{props.numberofcompletedmodule}</td>
                    <td>
                        <span class="label label-success">{props.Activemodule}</span>
                    </td>
                    
                    <td>{props.presentpercentage}</td>
                    <td>{props.previousbatchpresent}</td>
                    <td>{props.previousbatchdate}</td>
                    <td>{props.upcomingbatchdate}</td>
                    <td>{props.SendMessege}</td>
                   {/* "ad-st-view" */}
                    {/* <td><a class={props.SendmessegeClass}>{props.SendMessege}</a></td> */}
                </tr>
               
            </tbody>
    )
}

export default DetailsContent;