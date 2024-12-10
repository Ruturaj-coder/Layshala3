import React from 'react';
import Counter from './Counter'; // Adjust the import path as needed
import './Description.css'; // Assuming the CSS is in a file named Description.css
import { Link } from 'react-router-dom';

const Description = () => {
  return (
    <div style={{ padding: '50px 0', backgroundColor: 'white', textAlign: 'center' }}>
      <div className="container" style={{ fontFamily: 'Open Sans, sans-serif' }}>
        {/* Top Row with Icons */}
        <div className="row mb-5">
          <div className="col-md-4 slide-up" >
            <h3 style={{ fontWeight:'600'}}><Counter end={100} duration={3000} />+ Teachers</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Get to learn from experienced and trained teachers</p>
          </div>
          <div className="col-md-4 slide-up">
            <h3 style={{ fontWeight:'600'}}>Affordable Tuition Rates</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}><Counter end={50} duration={3000} />+ Courses at affordable rates</p>
          </div>
          <div className="col-md-4 slide-up">
            <h3 style={{ fontWeight:'600'}}><Counter end={7} duration={1000} />+ Years of Experience</h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif' }}>Get to learn from experienced and trained teachers</p>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>Layshala Lalit Kala Foundation</h2>
            <p style={{ textAlign: 'justify', lineHeight: '1.7',color:'#808080'}}>
              An organization started working under the guidance of Guru Smt. Savita Godbole with the intention of preserving and inheriting our rich culture of our country to the new generation. For the last many years Layashala has been working in the same direction. Layashala was established by Savita tai in 1978. It was later registered under the society act in 1993, and now working on a Global platform. We strongly believe in quality work.<br/><br/>
              Guru Savita tai Godbole strongly believes that art is a very important aspect of life. Dance in particular helps to keep you physically and mentally fit.<br/><br/>
              Savita tai strictly believes in quality education in art, thus following in her footsteps. Layashala is bound to give the same.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link to={'/login'}><button className=" mx-2" style={{ backgroundColor: '#FFA800',color:'#FFFFFF', border: 'none',fontFamily: 'Open Sans, sans-serif',fontWeight:'500' ,borderRadius:'15px',width:'150px',height:'30px'}}>Log in</button></Link>
              <Link to={'/register'}><button className="mx-2" style={{ backgroundColor: '#FFA800', color:'#FFFFFF',border: 'none',fontFamily: 'Open Sans, sans-serif',fontWeight:'500',borderRadius:'15px',width:'150px' ,height:'30px'}}>Register</button></Link>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/kathak-dance1.jpg'}
              alt="Guru Savita tai Godbole"
              className="img-fluid"
              style={{ borderRadius: '15px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
