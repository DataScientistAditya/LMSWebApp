import React,{useState, useEffect} from "react";


const CreateTodaysClassFormComps=()=>{
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
                    <label class="">Class Name</label>
                </div>
                <div class="input-field col s6">
                    <input type="text" value="" class="validate" required/>
                    <label class="">Class Details</label>
                </div>
            </div>
           
            <div class="row">
                <div class="input-field col s6">
                    <input type="number"  class="validate" required onChange={GetModule}/>
                    <label class="">Number of Contents to Add</label>
                </div>
            </div>
            <div class="row">
                
            </div>
            { List.map((el,i)=>{
                return(
                    <div class="row" key={i}>
                       <div class="file-field input-field col s12">
                            <div class="btn admin-upload-btn">
                                <span>File {el}</span>
                                <input type="file"/>
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" placeholder="upload document image"/>
                            </div>
                        </div>
                    </div>
                       
                    
                )
            })}
            
                          
            <div class="row">
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper"><input type="submit" class="waves-button-input"/></i>
                </div>
            </div>
        </form>
    )
}

export default CreateTodaysClassFormComps;