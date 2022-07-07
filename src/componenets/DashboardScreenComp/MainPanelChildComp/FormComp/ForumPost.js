import React from "react";


const PostOnForum =()=>{
    return(
        <form >
            <div class="row">
                <div class="input-field col s6" style={{zIndex:3}}>
                    <input type="text"  class="validate" required  placeholder="Post Name"/>
                </div>
                <div class="input-field col s6" style={{zIndex:3}}>
                    <input type="text"  class="validate" placeholder="Post Subject" required/>
                    
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6" style={{zIndex:3}}>
                    <input type="text"  class="validate" placeholder="Search Course here" required />
                    
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6" style={{zIndex:3}}>
                    <input type="text"  class="validate" placeholder="Search Module here" required />
                    
                </div>
            </div>
        
            <div class="row" >
                <div class="input-field col s6" style={{zIndex:3}}>
                    <input type="text"  class="validate" placeholder="Search Batch Here"  required />
                </div>
            </div>
            
            <div class="row" >
                <div class="input-field col s6" style={{zIndex:3}}>
                    <textarea placeholder="Write your Post Here" ></textarea>
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

export default PostOnForum