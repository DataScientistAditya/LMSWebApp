import React from "react";
import { useNavigate } from "react-router-dom";


const ProfileMainContainer=(props)=>{

    const nav = useNavigate();
    return(
        <div class="stu-db">
            <div class="container pg-inn">
                <div class="col-md-3">
                    <div class="pro-user">
                        <img src={props.ProfileImage} alt="user"/>
                    </div>
                    <div class="pro-user-bio">
                        <ul>
                            <li>
                                <button onClick={()=>{nav("/profile/username")}} class="waves-effect waves-light btn-large sdb-btn sdb-btn-edit"><i class="fa fa-pencil"></i>Edit Profile</button>
                            </li>
                            <li>
                                <h4>{props.Name}</h4>
                            </li>
                            <li>Student Id: ST17241</li>
                            <li><a href="#!"><i class="fa fa-facebook"></i> Facebook: my sample</a></li>
                            <li><a href="#!"><i class="fa fa-google-plus"></i> Google: my sample</a></li>
                            <li><a href="#!"><i class="fa fa-twitter"></i> Twitter: my sample</a></li>
                        </ul>
                    </div>
                    
                </div>
                <div class="col-md-9">
                    <div class="udb">

                        <div class="udb-sec udb-prof">
                            <h4><img src="images/icon/db1.png" alt="" />{props.Name}</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                                to using 'Content here, content here', making it look like readable English.</p>
                            <div class="sdb-tabl-com sdb-pro-table">
                                <table class="responsive-table bordered">
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td>{props.Name}</td>
                                        </tr>
                                        <tr>
                                            <td>Id</td>
                                            <td>:</td>
                                            <td>{props.Id}</td>
                                        </tr>
                                        <tr>
                                            <td>Eamil</td>
                                            <td>:</td>
                                            <td>{props.Email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>:</td>
                                            <td>{props.Phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of birth</td>
                                            <td>:</td>
                                            <td>{props.Dob}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>:</td>
                                            <td>{props.Address}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Status}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Upcoming Class</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.UpcomingClass}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Previous Class</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.PrevClassDate}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Attendence</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Attendnce}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Active Batch</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Batch1}   {props.Batch2}   {props.Batch3}  {props.Batch4}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Active Module</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.ActiveModule}</span> </td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Course</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Course}</span> </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMainContainer;