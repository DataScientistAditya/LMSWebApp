import React, {useState} from "react";


const CourseContentComp=(props)=>{

    const [HomeStyle,SetHome] = useState({display:"block"});
    const [ModuleStyle,SetModule] = useState({display:"none"});
    const [BatchStyle,SetBatch] = useState({display:"none"});

    const toHome=()=>{
        if (HomeStyle.display === "none") {
            SetBatch({display:"none"});
            SetModule({display:"none"});
            SetHome({display:"block"});
        }
    };

    const toModule=()=>{
        if (ModuleStyle.display ==="none") {
            SetHome({display:"none"});
            SetBatch({display:"none"});
            SetModule({display:"block"});

        }
    };

    const toBatch=()=>{
        if (BatchStyle.display === "none") {
            SetHome({display:"none"});
            SetModule({display:"none"});
            SetBatch({display:"block"});
        }
    }
    return(
        <div class="cor-p5">
            <h3>Course Syllabus</h3>
            <ul class="nav nav-tabs">
                <li onClick={toHome} class="active"><a data-toggle="tab" href="#home">
                <img src="images/icon/cor4.png" alt=""/> <span>Course Content</span></a>
                </li>
                <li onClick={toModule}><a data-toggle="tab" href="#menu1"><img src={require("../../../static/images/icon/cor3.png")} alt=""/><span>Module</span></a></li>
                <li onClick={toBatch}><a data-toggle="tab" href="#menu2"><img src={require("../../../static/images/icon/cor5.png")} alt=""/><span>Total Batch</span></a></li>
            </ul>

            <div  class="tab-content">
                <div style={HomeStyle} id="home">
                    <h4>Home</h4>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div style={ModuleStyle} id="menu1" >
                    <h4>Total Module</h4>
                    <div class="sdb-tabl-com sdb-pro-table">
                                <table class="responsive-table bordered">
                                    <tbody>
                                        <tr>
                                            <td>Module 1</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.PrevClassDate}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Module 2</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Attendnce}</span> </td>
                                        </tr>
                                        <tr>
                                            <td>Module 3</td>
                                            <td>:</td>
                                            <td><span class="db-done">{props.Batch1}   {props.Batch2}   {props.Batch3}  {props.Batch4}</span> </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                               
                            </div>
                </div>
                <div style={BatchStyle} id="menu2">
                    <h4>Menu 2</h4>
                    <p>Some content in menu 2.</p>
                </div>
            </div>
        </div>
    )
}

export default CourseContentComp;