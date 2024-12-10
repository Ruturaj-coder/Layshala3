// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals"; 


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { UserProvider } from "./pages/Studentpages/StudentUserContext"; // Import UserProvider

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <UserProvider> {/* Wrap the App with UserProvider */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </UserProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RoleBasedProvider from "./RoleBasedProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoleBasedProvider>
        <App />
      </RoleBasedProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
