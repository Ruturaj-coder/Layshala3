import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentPublicLayout from "../StudDashboard/StudentPublicLayout";
import StudentDashboardLayout from "../StudDashboard/StudentDashboardLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import StudentLogin from "../Login/StudentLogin/StudentLogin";
import AdminLogin from "../Login/AdminLogin/AdminLogin";
import Register from "../Register/Register";
import Contact from "../Contact/Contact";
import NoPage from "../NoPage";
import StudentHome from "../../pages/Studentpages/StudentHome";
import StudentMyProfile from "../../pages/Studentpages/StudentMyProfile";
import StudentEvents from "../../pages/Studentpages/StudentEvents";
import StudentAchievementForm from "../../pages/Studentpages/StudentAchievementForm";
import StudentFeedback from "../../pages/Studentpages/StudentFeedback";
import AdminDashboardLayout from "../AdminDashboard/AdminDashboardLayout";
import AdminHome from "../../pages/Adminpages/AdminHome";
import AdminMyProfile from "../../pages/Adminpages/AdminMyProfile";
import AdminEvents from "../../pages/Adminpages/AdminEvents";
import AdminAchievementForm from "../../pages/Adminpages/AdminViewAchievement";
import AdminFeedback from "../../pages/Adminpages/AdminFeedback";
import AdminStudentDetails from "../../pages/Adminpages/AdminStudentDetails";


const AllRoutes = () => {
  console.log("Rendering AllRoutes Component");

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<StudentPublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
      </Route>

      {/* Student dashboard */}
      <Route element={<StudentDashboardLayout />}>
        <Route path="/login/student/home" element={<StudentHome />} />
        <Route path="/login/student/myprofile" element={<StudentMyProfile />} />
        <Route path="/login/student/events" element={<StudentEvents />} />
        <Route path="/login/student/achievements" element={<StudentAchievementForm />} />
        <Route path="/login/student/feedback" element={<StudentFeedback />} />
      </Route>

       {/* Admin dashboard */}
       <Route element={<AdminDashboardLayout />}>
        <Route path="/login/admin/home1" element={<AdminHome/>} />
        <Route path="/login/admin/myprofile1" element={<AdminMyProfile/>} />
        <Route path="/login/admin/studentdetails1" element={<AdminStudentDetails/>} />
        <Route path="/login/admin/events1" element={<AdminEvents />} />
        <Route path="/login/admin/achievements1" element={<AdminAchievementForm/>} />
        <Route path="/login/admin/feedback1" element={<AdminFeedback />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AllRoutes;
