// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import "./DashboardLayout.css";

// const DashboardLayout = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Title Bar */}
//       <header className="title-bar">
//         <div className="title-left">
//           <img
//             src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
//             alt="Logo"
//             className="logo"
//           />
//           <div className="foundation-name">
//             <span className="layshala">Layshala</span>
//             <span className="foundation">Lalit Kala Foundation</span>
//           </div>
//         </div>
//         <div className="title-right">
//           <span className="username">Username</span>
//           <button className="logout-btn">Logout</button>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="main-layout">
//         {/* Sidebar */}
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <Link to="/login/admin/home" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
//                   alt="Home"
//                   className="sidebar-logo"
//                 />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/myprofile" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"}
//                   alt="My-Profile"
//                   className="sidebar-logo"
//                 />
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/events" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/events-logo.png"}
//                   alt="Events"
//                   className="sidebar-logo"
//                 />
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/achievements" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/achievements-logo.png"}
//                   alt="Achievements"
//                   className="sidebar-logo"
//                 />
//                 My Achievements
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/studcorner" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/student-logo.png"}
//                   alt="Student's Corner"
//                   className="sidebar-logo"
//                 />
//                 Student's Corner
//               </Link>
//             </li>

//             <li>
//               <Link to="/login/admin/tutsection" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/tutorial-logo.png"}
//                   alt="Tutorial's Section"
//                   className="sidebar-logo"
//                 />
//                 Tutorial's Section
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/feedback" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"}
//                   alt="Feedback"
//                   className="sidebar-logo"
//                 />
//                 Feedback
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Content Area */}
//         <main className="content">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// import React, { useContext } from "react";
// import { Outlet, Link } from "react-router-dom";
// import { UserContext } from "../../pages/UserContext";
// import "../../css/DashboardLayout.css";

// const DashboardLayout = () => {
//   const { user } = useContext(UserContext); // Access user context

//   return (
//     <div className="dashboard-container">
//       {/* Title Bar */}
//       <header className="title-bar">
//         <div className="title-left">
//           <img
//             src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
//             alt="Logo"
//             className="logo"
//           />
//           <div className="foundation-name">
//             <span className="layshala">Layshala</span>
//             <span className="foundation">Lalit Kala Foundation</span>
//           </div>
//         </div>
//         <div className="title-right">
//           <span className="username">{user.firstName || "Username"}</span>
//           <button className="logout-btn">Logout</button>
//         </div>
//       </header>

//       {/* Main Layout */}
//       <div className="main-layout">
//         {/* Sidebar */}
//         <nav className="sidebar">
//           <div className="user-info mb-3 text-center">
//             <div
//               className="rounded-circle border mx-auto"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 overflow: "hidden",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {user.photo ? (
//                 <img
//                   src={user.photo}
//                   alt="User"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               ) : (
//                 <i className="bi bi-person-circle" style={{ fontSize: "2.5rem" }}></i>
//               )}
//             </div>
//             <p className="mt-2">{user.firstName ? `${user.firstName} ${user.lastName}` : "Your Name"}</p>
//           </div>
//           <ul>
//             <li>
//               <Link to="/login/admin/home" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
//                   alt="Home"
//                   className="sidebar-logo"
//                 />
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/myprofile" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"}
//                   alt="My Profile"
//                   className="sidebar-logo"
//                 />
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/events" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/events-logo.png"}
//                   alt="Events"
//                   className="sidebar-logo"
//                 />
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/achievements" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/achievements-logo.png"}
//                   alt="Achievements"
//                   className="sidebar-logo"
//                 />
//                 My Achievements
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/studcorner" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/student-logo.png"}
//                   alt="Student's Corner"
//                   className="sidebar-logo"
//                 />
//                 Student's Corner
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/tutsection" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/tutorial-logo.png"}
//                   alt="Tutorial's Section"
//                   className="sidebar-logo"
//                 />
//                 Tutorial's Section
//               </Link>
//             </li>
//             <li>
//               <Link to="/login/admin/feedback" className="list-items">
//                 <img
//                   src={process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"}
//                   alt="Feedback"
//                   className="sidebar-logo"
//                 />
//                 Feedback
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Content Area */}
//         <main className="content">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import React, { useEffect, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../pages/Studentpages/StudentUserContext";
import "../../css/DashboardLayout.css";

const StudentDashboardLayout = () => {
  const { user } = useContext(UserContext); // Access user context
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [studentData, setStudentData] = useState({
    firstName: "Loading...",
    email: "Loading...",
    photo: null,
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          throw new Error("User is not logged in");
        }
  
        const response = await axios.get(`http://localhost:5000/api/student/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
  
        console.log("API Response:", response.data);

        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
  
    fetchStudentData();
  }, []);
  

  return (
    <div className="dashboard-container">
      {/* Title Bar */}
      <header className="title-bar">
      <Link className="navbar-brand d-flex align-items-center" to="/"><div className="title-left">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/Layshala_Logo.png"}
            alt="Logo"
            className="logo"
          />
          <div className="foundation-name">
            <span className="layshala">Layshala</span>
            <span className="foundation">Lalit Kala Foundation</span>
          </div>
        </div>
        </Link>
        <div className="title-right">
          <span className="username">{studentData.email}</span>
          <button
            className="menu-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      {menuOpen && (
        <nav className="mobile-navbar">
          <ul>
            <li>
              <Link to="/login/student/home" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/myprofile"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/events"
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/achievements"
                onClick={() => setMenuOpen(false)}
              >
                My Achievements
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/studcorner"
                onClick={() => setMenuOpen(false)}
              >
                Student's Corner
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/tutsection"
                onClick={() => setMenuOpen(false)}
              >
                Tutorial's Section
              </Link>
            </li>
            <li>
              <Link
                to="/login/student/feedback"
                onClick={() => setMenuOpen(false)}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Layout */}
      <div className="main-layout">
        {/* Sidebar (hidden on mobile) */}
        <nav className="sidebar">
          <div className="user-info mb-3 text-center">
            <div
              className="rounded-circle border mx-auto"
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {studentData.photo ? (
                <img
                  src={studentData.photo}
                  alt="User"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "2.5rem" }}
                ></i>
              )}
            </div>
            <p className="mt-2">
              {`${studentData.firstName}`}
            </p>
          </div>
          <ul>
            <li>
              <Link to="/login/student/home" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
                  alt="Home"
                  className="sidebar-logo"
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="/login/student/myprofile" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"
                  }
                  alt="My Profile"
                  className="sidebar-logo"
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/login/student/events" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/events-logo.png"
                  }
                  alt="Events"
                  className="sidebar-logo"
                />
                Events
              </Link>
            </li>
            <li>
              <Link to="/login/student/achievements" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/achievements-logo.png"
                  }
                  alt="Achievements"
                  className="sidebar-logo"
                />
                My Achievements
              </Link>
            </li>
            <li>
              <Link to="/login/student/studcorner" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/student-logo.png"
                  }
                  alt="Student's Corner"
                  className="sidebar-logo"
                />
                Student's Corner
              </Link>
            </li>
            <li>
              <Link to="/login/student/tutsection" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/tutorial-logo.png"
                  }
                  alt="Tutorial's Section"
                  className="sidebar-logo"
                />
                Tutorial's Section
              </Link>
            </li>
            <li>
              <Link to="/login/student/feedback" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"
                  }
                  alt="Feedback"
                  className="sidebar-logo"
                />
                Feedback
              </Link>
            </li>
          </ul>
        </nav>

        {/* Content Area */}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboardLayout;
