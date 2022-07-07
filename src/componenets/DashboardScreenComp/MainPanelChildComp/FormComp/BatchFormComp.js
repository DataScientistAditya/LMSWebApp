import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BatchFormComps=()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [EndDate, setEndDate] = useState(new Date());
    return(
        <form>
            <div class="row">
                <div class="input-field col s6">
                    <input type="text" class="validate" required />
                    <label class="">Batch name</label>
                </div>
                <div class="input-field col s6">
                    <input type="text" value="" class="validate" required/>
                    <label class="">Batch Details</label>
                </div>
            </div>
            <div class="row" >
                <div class="input-field col s6" style={{zIndex:3}}>
                            <DatePicker  selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                isClearable
                                placeholderText="Enter the Start Date"
                                dateFormat="MM/dd/yyyy  EE hh:mm"
                                
                                
                            />
                </div>
                <div class="input-field col s6" style={{zIndex:3}}>
                            <DatePicker  
                                selected={EndDate}
                                onChange={(date) => setEndDate(date)}
                                showTimeSelect
                                isClearable
                                placeholderText="Enter the End Date"
                                dateFormat="MM/dd/yyyy  EE hh:mm a"
                            />
                </div>
            </div>
            <div class="row">
               
                <div class="input-field col s6">
                    <input type="text" value="" class="validate" required />
                    <label class="">Course</label>
                </div>
            </div>  
                                              
            <div class="row" style={{zIndex:1}}>
                <div class="input-field col s12">
                    <i class="waves-effect waves-light btn-large waves-input-wrapper"><input type="submit" class="waves-button-input"/></i>
                </div>
            </div>
        </form>
    )
}

export default BatchFormComps;