import React from "react";
import DetailsContent from "../../DashboardScreenComp/MainPanelChildComp/OverViewComp/DetalisCardContent/DetailsCardContent";
import SearchCompDashboard from "../../DashboardScreenComp/DashboardSearchComp/DashboardSearchComp";
const BatchWiseUser=(props)=>{
    const List = [1,2,3,4,5,6,7,8,9]
    
    return(
            <div class="container-fluid sb2">
                <div class="row">
                <div class="sb2-2-3">
            
            <div class="row">
                <div class="col-md-12">
                    <div class="box-inn-sp">
                    
                        <div class="inn-title">
                        
                            <h4>Batch wise Students Details</h4>
                            
                            
                            {/* <p>All about courses, program structure, fees, best course lists (ranking), syllabus, teaching techniques and other details.</p> */}
                            
                        </div>
                        <div class="Searchoption" style={{width:"100%",height:80, backgroundColor:"#F58610"}}>
                        <SearchCompDashboard></SearchCompDashboard>
                    </div>
                        <div class="tab-inn">
                        <div class="table-responsive table-desi">
                        <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                {/* <th>{props.upcomingbatchdate}</th>
                                <th>{props.previousbatchdate}</th>
                                <th>{props.previousbatchpresent}</th>
                                <th>{props.presentpercentage}</th>
                                <th>{props.SendMessege}</th> */}
                            </tr>
                        </thead>
                        {List.map((el,i)=>{
                                return <DetailsContent 
                                Key = {i}
                                Name = "Aditya"
                                SendMessege = {<button  style={{color:"white", backgroundColor:"#FC4500",borderRadius:10,borderColor:"#ffff"}}>Conatct</button>}
                                >

                            </DetailsContent>
                        })}
                        </table>
                        </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
                </div>
            </div>
    )
}

export default BatchWiseUser;