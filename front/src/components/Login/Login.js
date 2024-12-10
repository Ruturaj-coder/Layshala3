import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  console.log("Rendering Login Component");
  return (
    
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h1 className="text-center mb-4">Login Page</h1>
        
        <div className="d-grid gap-3 mb-4">
          <Link to="/login/student">
            <button className="btn btn-primary btn-lg w-100">Student Login</button>
          </Link>
          <Link to="/login/admin">
            <button className="btn btn-secondary btn-lg w-100">Admin Login</button>
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Login;
