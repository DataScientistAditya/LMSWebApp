import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import LandingScreen from "./Screens/LandingScreen/LandingScreen";
import DashboardScreen from "./Screens/DashboardScreen/DashboardScreen";
import DetailsScreen from "./Screens/DetailsScreens/DetailScreen";
import CourseModuleDetailsScreen from "./Screens/DetailsScreens/CourseAndModuleDetailsScreen";
// import BatchWiseStudentDetailsScreen from "./Screens/DetailsScreens/BatchwiseStudentDetails";
import BatchWiseModuleDetailsScreen from "./Screens/DetailsScreens/BatchwiseStudent";
import EditExamScreen from "./Screens/EditScreen/EditExamScreen";
import EditCourseScreen from "./Screens/EditScreen/CourseEditScreen";
import EditProfileScreen from "./Screens/EditScreen/EditProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="/dashboard" element={<DashboardScreen></DashboardScreen>}></Route>
        <Route path="/details/:username" element={<DetailsScreen></DetailsScreen>}></Route>
        <Route path="/coursedetails/:name" element={<CourseModuleDetailsScreen></CourseModuleDetailsScreen>}></Route>
        <Route path="/batchwisestudents/:batch" element={<BatchWiseModuleDetailsScreen></BatchWiseModuleDetailsScreen>}></Route>
        <Route path="/examedit/:exam" element={<EditExamScreen></EditExamScreen>}></Route>
        <Route path="/courseedit/:course" element={<EditCourseScreen></EditCourseScreen>}></Route>
        <Route path="/profile/:username" element={<EditProfileScreen></EditProfileScreen>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
