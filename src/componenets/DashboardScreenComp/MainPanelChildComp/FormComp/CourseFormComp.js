import React,{useState,useEffect} from "react";


const CourseFormComp=()=>{
    
    const [NumberofModule,SetNumberofModule] = useState(1);
    const [List,SetList] = useState([]);
    const GetModule=(e)=>{
        SetNumberofModule(e.target.value);
    };
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    };
    useEffect(()=>{
        try {
            SetList(range(1,NumberofModule));
        } catch (error) {
            console.log(error)
        }
        
        
        },[NumberofModule]);

    return(
        <form>
            <div class="row">
                <div class="input-field col s6">
                    <input type="text" value="" class="validate" required />
                    <label class="">Course name</label>
                </div>
            </div>
            <div class = "row">
                <div class="input-field col s6">
                    <textarea type="text" value="" class="validate" required/>
                    <label class="">Course Details</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="number" value="" class="validate" required  onChange={GetModule}/>
                    <label class="">Number of Module</label>
                </div>
            </div>
            <div class="row">
            <div class="input-field col s6">
                    <input type="text" value="" class="validate" required />
                    <label class="">Course Subject</label>
                </div>
            </div>
           {List.map((el,i)=>{
            
               return( <div class="row" key={i}>
                <div class="input-field col s6">
                   <input type="text"  class="validate" required />
                   <label class="">Name of Module {el}</label>
               </div>
               <div class="input-field col s6">
                   <input type="number"  class="validate" required />
                   <label class="">Days for Module {el}</label>
               </div>
           </div>)
             
           })}
                                                   
            <div class="row">
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper"><input type="submit" class="waves-button-input"/></i>
                </div>
            </div>
        </form>
    )
}

export default CourseFormComp;