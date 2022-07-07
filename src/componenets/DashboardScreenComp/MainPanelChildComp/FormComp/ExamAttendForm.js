import React from "react";


const ExamAttendFormComps=(props)=>{

    return(
        <form style={(props.AttendCliked)? {display:"Block"}:{display:"none"}}>
           
            <h2>Your Questions :</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="row">
                    <div class="input-field col s6" style={{zIndex:4}}>
                       <input type="checkbox" class="validate"></input>
                       <label class="">Answer 1</label>
                    </div> 
                    <div class="input-field col s6" style={{zIndex:4}}>
                       <input type="checkbox" class="validate"></input>
                       <label class="">Answer 2</label>
                    </div> 
            </div>
            <div class="row">
                    <div class="input-field col s6" style={{zIndex:4}}>
                       <input type="checkbox" class="validate"></input>
                       <label class="">Answer 3</label>
                    </div> 
                    <div class="input-field col s6" style={{zIndex:4}}>
                       <input type="checkbox" class="validate"></input>
                       <label class="">Answer 4</label>
                    </div> 
            </div>
            
                          
            <div class="row" style={{marginTop:20}}>
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper"><input type="submit" class="waves-button-input"/></i>
                </div>
            </div>
        </form>
    )
}

export default ExamAttendFormComps;