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

import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../pages/Adminpages/AdminUserContext";
import "../../css/DashboardLayout.css";

const AdminDashboardLayout = () => {
  const { user } = useContext(UserContext); // Access user context
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <div className="dashboard-container">
      {/* Title Bar */}
      <header className="title-bar">
        <div className="title-left">
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
        <div className="title-right">
          <span className="username">{user.firstName || "Username"}</span>
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
              <Link to="/login/admin/home1" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login/admin/myprofile1"
                onClick={() => setMenuOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/login/admin/studentdetails1"
                onClick={() => setMenuOpen(false)}
              >
                Student Detail's
              </Link>
            </li>
            <li>
              <Link to="/login/admin/events1" onClick={() => setMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/login/admin/achievements1"
                onClick={() => setMenuOpen(false)}
              >
                My Achievements
              </Link>
            </li>
            {/* <li>
              <Link
                to="/login/admin/admincorner1"
                onClick={() => setMenuOpen(false)}
              >
                Student's Corner
              </Link>
            </li> */}
            <li>
              <Link
                to="/login/admin/tutsection1"
                onClick={() => setMenuOpen(false)}
              >
                Tutorial's Section
              </Link>
            </li>
            <li>
              <Link
                to="/login/admin/feedback1"
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
              {user.photo ? (
                <img
                  src={user.photo}
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
              {user.firstName
                ? `${user.firstName} ${user.lastName}`
                : "Your Name"}
            </p>
          </div>
          <ul>
            <li>
              <Link to="/login/admin/home1" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/home-logo.png"}
                  alt="Home"
                  className="sidebar-logo"
                />
                Home
              </Link>
            </li>
            <li>
              <Link to="/login/admin/myprofile1" className="list-items">
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
              <Link to="/login/admin/studentdetails1" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/Profile-logo.png"
                  }
                  alt="My Profile"
                  className="sidebar-logo"
                />
                Student Detail's
              </Link>
            </li>
            <li>
              <Link to="/login/admin/events1" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/events-logo.png"}
                  alt="Events"
                  className="sidebar-logo"
                />
                Events
              </Link>
            </li>
            <li>
              <Link to="/login/admin/achievements1" className="list-items">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/achievements-logo.png"
                  }
                  alt="Achievements"
                  className="sidebar-logo"
                />
                My Achievements
              </Link>
            </li>
            {/* <li>
              <Link to="/login/admin/admincorner1" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/student-logo.png"}
                  alt="Student's Corner"
                  className="sidebar-logo"
                />
                Student's Corner
              </Link>
            </li> */}
            <li>
              <Link to="/login/admin/tutsection1" className="list-items">
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
              <Link to="/login/admin/feedback1" className="list-items">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/feedback-logo.png"}
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

export default AdminDashboardLayout;
