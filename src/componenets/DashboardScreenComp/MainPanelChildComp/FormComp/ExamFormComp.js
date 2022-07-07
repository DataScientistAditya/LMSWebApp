import React,{useState, useEffect} from "react";
import DatePicker from "react-datepicker";

const ExamFormComps=()=>{
    const [NumberofModule,SetNumberofModule] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
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
                    <label class="">Exam Name</label>
                </div>
                <div class="input-field col s6">
                    <input type="text" value="" class="validate" required/>
                    <label class="">Exam Details</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                        <DatePicker  
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            isClearable
                            placeholderText="Enter the Date"
                            dateFormat="MM/dd/yyyy  EE hh:mm a"
                        />
                        
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input type="number"  class="validate" required onChange={GetModule}/>
                    <label class="">Question to add</label>
                </div>
            </div>
            <div class="row">
                
            </div>
            { List.map((el,i)=>{
                return(
                    <div class="row" key={i}>
                        <div class="input-field col s6">
                            <input type="text"  class="validate"/>
                            <label class="">Questions {el}</label>
                            <div class="input-field col s6">
                            <input type="text"  class="validate"/>
                            <label class="">Answer 1</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="text"  class="validate"/>
                            <label class="">Answer 2</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="text"  class="validate"/>
                            <label class="">Answer 3</label>
                        </div>
                        <div class="input-field col s6">
                            <input type="text"  class="validate"/>
                            <label class="">Answer 4</label>
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

export default ExamFormComps;