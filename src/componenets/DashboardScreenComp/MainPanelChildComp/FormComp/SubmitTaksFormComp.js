import React from "react";


const TaskAttendFormComps=(props)=>{

    return(
        <form style={(props.TaskAttendCliked)? {display:"Block"}:{display:"none"}}>
           
            <h2>Your Task :</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
            <div class="row">
                <div class="input-field">
                    <textarea placeholder="Paste your Answer Here"></textarea>
                </div>
            </div>
            <div class="row">
                
                <div class="file-field input-field col s12">
                    <div class="btn admin-upload-btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Upload a Screenshot"/>
                    </div>
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

export default TaskAttendFormComps;