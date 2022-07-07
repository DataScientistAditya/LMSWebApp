import React,{useState} from "react";



const TimeTableComp=()=>{

    const [isMondayExpand,SetMondayExpand] = useState(false);
    const [isTuesdayExpand,SetTuesdayExpand] = useState(false);
    const [isWednesDayExpand,SetWednesdayExpand] = useState(false);
    const [isThrusdayExpand,SetThrusdayExpand] = useState(false);
    const [isFridayExpand,SetFridayExpand] = useState(false);
    const [isSaturdayExpand,SetSaturdayExpand] = useState(false);


    const ExpandMonday=()=>{
        if (isMondayExpand === false) {
            
            SetTuesdayExpand(false);
            SetWednesdayExpand(false);
            SetThrusdayExpand(false);
            SetFridayExpand(false);
            SetSaturdayExpand(false);
            SetMondayExpand(true);
        }
        else{
            SetMondayExpand(false);
        }
    };

    const ExpandTuesDay=()=>{
        if (isTuesdayExpand === false) {

            SetMondayExpand(false);
            SetWednesdayExpand(false);
            SetThrusdayExpand(false);
            SetFridayExpand(false);
            SetSaturdayExpand(false);
            SetTuesdayExpand(true);
        }else{
            SetTuesdayExpand(false)
        }
    };

    const WednesdayExpand=()=>{
        if (isWednesDayExpand === false) {
            SetMondayExpand(false);
            SetTuesdayExpand(false);
            SetThrusdayExpand(false);
            SetFridayExpand(false);
            SetSaturdayExpand(false);
            SetWednesdayExpand(true);
        }else{
            SetWednesdayExpand(false);
        }
    };

    const ThrusdayExpand=()=>{
        if (isThrusdayExpand=== false) {
            SetMondayExpand(false);
            SetTuesdayExpand(false);
            SetWednesdayExpand(false);
            SetFridayExpand(false);
            SetSaturdayExpand(false);
            SetThrusdayExpand(true);
        }else{
            SetThrusdayExpand(false);
        }
    };

    const FriDayExpand=()=>{
        if (isFridayExpand === false) {
            SetMondayExpand(false);
            SetTuesdayExpand(false);
            SetWednesdayExpand(false);
            SetThrusdayExpand(false);
            SetSaturdayExpand(false);
            SetFridayExpand(true);
        }else{
            SetFridayExpand(false);
        }
    };

    const SaturdayExpand =()=>{
        if (isSaturdayExpand===false) {
            SetMondayExpand(false);
            SetTuesdayExpand(false);
            SetWednesdayExpand(false);
            SetThrusdayExpand(false);
            SetSaturdayExpand(false);
            SetSaturdayExpand(true);
        }else{
            SetSaturdayExpand(false);
        }
    }
    return(
        <div class="cor-p4">
            <h3>A typical weekly timetable:</h3>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <ul class="collapsible" data-collapsible="accordion">
                <li>
                    <div onClick={ExpandMonday} class= {(isMondayExpand)?"collapsible-header":"collapsible-header active"}>Monday</div>
                    <div class="collapsible-body cor-tim-tab" style={(isMondayExpand)? {display:"block"}: {display:"none"}}>
                        <h4>Batches and Timing</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                            <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                            <li>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem</li>
                            <li>Nullam tincidunt urna non porttitor luctus. Suspendisse sem urna, auctor ac commodo eu, bibendum sed nulla.</li>
                        </ul>
                       
                    </div>
                </li>
                <li>
                    <div onClick={ExpandTuesDay} class= {(isTuesdayExpand)? "collapsible-header": "collapsible-header active"} >Tuesday</div>
                        <div class="collapsible-body cor-tim-tab" style={(isTuesdayExpand)? {display:"block"}: {display:"none"}}>
                            <h4>Batches and Timing</h4>
                            <ul>
                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                                <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                                <li>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem</li>
                            </ul>
                        </div>
                </li>
                <li>
                    <div onClick={WednesdayExpand} class={(isWednesDayExpand)? "collapsible-header":"collapsible-header active"}>Wednesday</div>
                    <div class="collapsible-body cor-tim-tab" style={(isWednesDayExpand)? {display:"block"}:{display:"none"}}>
                        <h4>Batches and Timing</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                            <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                        </ul>
                       
                    </div>
                </li>
                <li>
                    <div onClick={ThrusdayExpand} class={(isThrusdayExpand)? "collapsible-header":"collapsible-header active"}>Thrusday</div>
                    <div class="collapsible-body cor-tim-tab" style={(isThrusdayExpand)? {display:"block"}: {display:"none"}}>
                        <h4>Batches and Timing</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                            <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                        </ul>
                        
                    </div>
                </li>
                <li>
                    <div onClick={FriDayExpand}  class={(isFridayExpand)?"collapsible-header":"collapsible-header active"}>Friday</div>
                    <div class="collapsible-body cor-tim-tab" style={(isFridayExpand)?{display:"block"}: {display:"none"}}>
                        <h4>Batches and Timing</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                            <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                        </ul>
                       
                    </div>
                </li>
                <li>
                    <div onClick={SaturdayExpand} class={(isSaturdayExpand)?"collapsible-header":"collapsible-header active"}>Saturday</div>
                    <div class="collapsible-body cor-tim-tab" style={(isSaturdayExpand)?{display:"block"}: {display:"none"}}>
                        <h4>Batches and Timing</h4>
                        <ul>
                            <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</li>
                            <li>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</li>
                        </ul>
                       
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TimeTableComp;