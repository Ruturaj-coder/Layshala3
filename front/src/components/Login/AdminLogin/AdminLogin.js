import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      
      // Store the token in local storage
      localStorage.setItem('token', response.data.token);
      
      // Navigate to admin dashboard/home
      navigate('/login/admin/home1');
    } catch (err) {
      // Display error message
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="position-relative" style={{ maxWidth: '400px', width: '100%' }}>
        <div 
          className="btn-group position-absolute w-100" 
          role="group" 
          style={{ top: '-30px', zIndex: 1 }}
        >
          <button type="button" className="btn btn-light" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '0px' }}>Student's Login</button>
          <button type="button" className="btn btn-warning" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '0px', backgroundColor:'#FFA800' }}>Admin Login</button>
        </div>

        <div className="card p-4 shadow-sm" style={{ border: 'none', borderRadius: '10px', paddingTop: '60px' }}>
          <h2 className="text-center mb-4 " style={{ fontFamily: 'Old Standard TT, serif', fontWeight: 'bold', color: '#800000' }}>Log in</h2>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1" required>
                  You agree to the <Link to="#" className="#" style={{color:'#800000',fontFamily:'Open Sans,serif',opacity:0.8}}>terms and conditions</Link>
                </label>
              </div>

            <button type="submit" className="btn btn-warning w-100" style={{ backgroundColor:'#FFA800' }}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
