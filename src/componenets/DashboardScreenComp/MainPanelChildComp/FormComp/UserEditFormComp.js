import React,{useState} from "react";
// import { Dropdown } from "bootstrap";

const UserEditFormComps=()=>{
    return(
        <form >
            <div class="row">
                <div class="input-field col s6">
                    <input type="text" class="validate" required  onChange={(e)=>{console.log(e.target.value)}}/>
                    <label class="">First name</label>
                </div>
                <div class="input-field col s6">
                    <input type="text"  class="validate" required/>
                    <label class="">Last name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="number"  class="validate" required/>
                    <label class="">Phone number</label>
                </div>
                <div class="input-field col s6">
                    <input type="email" class="validate"  required/>
                    <label class="">Email is</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="text"  class="validate"/>
                    <label class="">City</label>
                </div>
                <div class="input-field col s6">
                    <input type="text"  class="validate"/>
                    <label class="">Country</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="password"  class="validate"/>
                    <label class="">Password</label>
                </div>
                <div class="input-field col s6">
                    <input type="password" class="validate"/>
                    <label class="">Confirm Password</label>
                </div>
            </div>
           
            <div class="row">
                
                <div class="file-field input-field col s12">
                    <div class="btn admin-upload-btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Profile image"/>
                    </div>
                </div>
            </div>                                        
            <div class="row">
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper"><input type="submit" class="waves-button-input"/></i>
                </div>
            </div>
        </form>
    )
}

export default UserEditFormComps;