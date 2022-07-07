import React,{useState} from "react";
import SidebarPanelComp from "./MainPanelChildComp/Sidebarcomp";
import OverviewComp from "./MainPanelChildComp/Overview";
import DashBoardHeader from "./DashboardHeader";
import LatestActivity from "./MainPanelChildComp/OverViewComp/LatestActivity";
import ChatMessege from "../Chat/Chat";


const MainPanelComp=()=>{

    const [isClicked,SetisClicked] = useState({display:"none",width:"auto"});
    const [mainPanelWidth,SetMainPanelWidth] = useState({marginLeft:0,width:"100%"});
    const [isCreateBatch,SetCreateBatch] = useState(false);
    const [isCreateCourse,SetCreateCourse] = useState(false);
    const [isCreateUser,SetCreateUser] = useState(false);
    const [isCreateExam,SetCreateExam] = useState(false);
    const [isoverView,SetoverView] = useState(true);
    const [isStudentReport,SetStudentReport] = useState(false);
    const [isTeacherReport,SetTeacherReport] = useState(false);
    const [isAllUser,SetAllUser] = useState(false);
    const [isAllCourse,SetAllCourse] = useState(false);
    const [isAllBatch,SetAllBatch] = useState(false);
    const [isCreateTask,SetCreateTask] = useState(false);    
    const [msgDat,SetMsgData] = useState({}); 
    const [isMsgClicked,SetImgClicked] = useState(false); 
    const [Keys,SetKeys] = useState(0);
    const [isCreatePost,SetCreatePost] = useState(false);
    const [isViewForum,SetViewForum] = useState(false);
    const [isViewExam,SetViewExam] = useState(false);
    const [isViewTask,SetViewTask] = useState(false);
    const [isViewTodayClass,SetViewTodayClass] = useState(false);
    const [isCreateTodayClass,SetCreateTodayClass] = useState(false);
    const [isSendMessege,SetSendMessege] = useState(false);
    

    const GetisClicked=(data)=>{
        if (data===true) {
            if (isClicked.display === "none") {
                SetisClicked({display:"block",width:"15%"});
                SetMainPanelWidth({marginLeft:"15%",width:"85%"})
            }
            else{
                SetisClicked({display:"none",width:"auto"});
                SetMainPanelWidth({marginLeft:0,width:"100%"})
            }
            
        }
    };
    const GetisCreateBatch=()=>{
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreateBatch(true);
    };
    const GetisCreateCourse=()=>{
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false)
        SetCreateBatch(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreateCourse(true);
    };
    const GetisCreateUser=()=>{
        SetCreateExam(false);
        SetoverView(false)
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreateUser(true);
    };
    const GetisCreateExam=()=>{
        SetoverView(false)
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreateExam(true);
    };
    const GetOverView=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetoverView(true);
    };
    const GetStudentReport=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetTeacherReport(false);
        SetoverView(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetStudentReport(true);
    };
    const GetTeacherReport=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetAllCourse(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetTeacherReport(true);
        
    };
    const GetisAllCourse =()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllBatch(false);
        SetAllUser(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetAllCourse(true);
    };
    const GetisAllUser =()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetCreatePost(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetAllUser(true);
    };
    const GetisAllBatch=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetAllBatch(true);
        
    };

    const GetCreateTask=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreateTask(true);
    };

    const GetCreatePost=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetCreatePost(true);
    }

    const GetViewForum=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetViewForum(true);
    };

    const GetViewExam=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetViewExam(true);
    };

    const GetViewTask=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetViewTask(true);
    };

    const GetViewTodayCourseContent=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetCreateTodayClass(false);
        SetSendMessege(false);
        SetViewTodayClass(true);
    };

    const GetCreateTodaysCourse=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetSendMessege(false);
        SetCreateTodayClass(true);
    };

    const GetSendMessege=()=>{
        SetCreateBatch(false);
        SetCreateCourse(false);
        SetCreateUser(false);
        SetCreateExam(false);
        SetoverView(false);
        SetStudentReport(false);
        SetTeacherReport(false);
        SetAllCourse(false);
        SetAllUser(false);
        SetAllBatch(false);
        SetCreateTask(false);
        SetCreatePost(false);
        SetViewForum(false);
        SetViewExam(false);
        SetViewTask(false);
        SetViewTodayClass(false);
        SetCreateTodayClass(false);
        SetSendMessege(true);
    };


    const GetChatData=(data)=>{
       
        // console.log(data);
        if (Object.entries(data).length !== 0) {
            return  (SetMsgData(data),
            SetImgClicked(true)),
            SetKeys(data.data.Key)
        }

        
    };

    
    const CloseChatBox=()=>{
        SetImgClicked(false)
    };

    
    console.log(msgDat)
    return(
        <div>
            <DashBoardHeader SidebarClicked={GetisClicked} PassData={GetChatData}></DashBoardHeader>
            <div class="container-fluid sb2">
                <div class="row">
                    <SidebarPanelComp 
                            WidthPanel = {isClicked} 
                            CreateBatch = {GetisCreateBatch}
                            CreateCourse = {GetisCreateCourse}
                            CreateUser = {GetisCreateUser}
                            CreateExam = {GetisCreateExam}
                            overview={GetOverView}
                            StudentReport={GetStudentReport}
                            TeacherReport={GetTeacherReport}
                            AllCourses = {GetisAllCourse}
                            AllUser = {GetisAllUser}
                            AllBatch = {GetisAllBatch}
                            CreateTask = {GetCreateTask}
                            CreatePost = {GetCreatePost}
                            ViewForum = {GetViewForum}
                            ViewExam = {GetViewExam}
                            ViewTask = {GetViewTask}
                            ViewTodayCourse = {GetViewTodayCourseContent}
                            CreateTodayCourse = {GetCreateTodaysCourse}
                            SendMessege = {GetSendMessege}
                            
                            ></SidebarPanelComp>
                        <OverviewComp 
                            MainPanelWidth={mainPanelWidth} 
                            isBatch = {isCreateBatch}
                            isCourse={isCreateCourse}
                            isUser={isCreateUser}
                            isExam={isCreateExam}
                            isOverView = {isoverView}
                            isTeacher= {isTeacherReport}
                            isStudent = {isStudentReport }
                            isAllUser ={isAllUser}
                            isAllBatch = {isAllBatch}
                            isAllCourse = {isAllCourse}
                            isTask = {isCreateTask}
                            isCreatePost = {isCreatePost}
                            isviewForum = {isViewForum}
                            viewexam = {isViewExam}
                            viewTask={isViewTask}
                            viewTodayTask={isViewTodayClass}
                            CreateTodaysClass = {isCreateTodayClass}
                            IsSendMessege = {isSendMessege}
                            >

                        </OverviewComp>
                    <LatestActivity></LatestActivity>
                    <ChatMessege isMessege={isMsgClicked} SetClosePopUp={CloseChatBox} Keys = {Keys}></ChatMessege>
                </div>
            </div>
        </div>
        
    )
}

export default MainPanelComp;