import React from "react";


const SendMessegeComps=()=>{

    return(
        <form >
            <div class="row">
                <div class="input-field">
                    <input value="" placeholder="Reciever"></input>
                </div>
            </div>
            <div class="row">
                <div class="input-field">
                    <textarea placeholder="Your Messege"></textarea>
                </div>
            </div>
            <div class="row">
                
                <div class="file-field input-field col s12">
                    <div class="btn admin-upload-btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Attachments"/>
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

export default SendMessegeComps;