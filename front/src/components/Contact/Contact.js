import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '1000px' }}>
      <div className="row">
        {/* Left Side - Contact Form */}
        <div className="col-md-7">
          <h2 style={{ color: '#990000', fontWeight: 'bold' }}>Contact Our Team</h2>
          <p>Got any questions or queries? We are here to help</p>
          <form>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="First Name" 
                    required 
                    style={{ padding: '10px' }}
                  />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last Name" 
                    required 
                    style={{ padding: '10px' }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="abc123@gmail.com" 
                required 
                style={{ padding: '10px' }}
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Contact Number" 
                required 
                style={{ padding: '10px' }}
              />
            </div>
            <div className="mb-3">
              <textarea 
                className="form-control" 
                placeholder="Leave us a message..." 
                required 
                style={{ padding: '10px', height: '100px' }}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-dark" 
              style={{ width: '100%', padding: '10px' }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Information (Visible in Desktop View) */}
        <div className="col-md-5 d-none d-md-block" style={{ paddingLeft: '30px' }}>
          <div className="mb-4">
            <h4 style={{ color: '#990000' }}>Chat with us</h4>
            <p>Speak to our friendly team via live chat</p>
            <Link to="#" className="d-block mb-2">
              <i className="fab fa-whatsapp" style={{ marginRight: '10px', color: '#25D366' }}></i>
              Message us on WhatsApp
            </Link>
            <Link to="#" className="d-block">
              <i className="far fa-envelope" style={{ marginRight: '10px', color: '#007bff' }}></i>
              Shoot us an E-mail
            </Link>
          </div>
          <div className="mb-4">
            <h4 style={{ color: '#990000' }}>Call us</h4>
            <p>Call our team Mon-Sat from 8am-8pm</p>
            <p><i className="fas fa-phone" style={{ marginRight: '10px', color: '#007bff' }}></i>+91 12345 12345</p>
            <p><i className="fas fa-phone" style={{ marginRight: '10px', color: '#007bff' }}></i>+91 12345 12345</p>
          </div>
          <div>
            <h4 style={{ color: '#990000' }}>Visit us</h4>
            <p>Chat to us in person at Main Studio</p>
            <p>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#dc3545' }}></i>
              297, behind Veer Maruti Mandir, Shaniwar Peth, Pune, Maharashtra 411030
            </p>
          </div>
        </div>

        {/* Right Section becomes Footer (Visible in Mobile View) */}
        <div className="col-12 d-block d-md-none mt-5" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
          <div className="mb-4">
            <h4 style={{ color: '#990000' }}>Chat with us</h4>
            <p>Speak to our friendly team via live chat</p>
            <Link to="#" className="d-block mb-2">
              <i className="fab fa-whatsapp" style={{ marginRight: '10px', color: '#25D366' }}></i>
              Message us on WhatsApp
            </Link>
            <Link to="#" className="d-block">
              <i className="far fa-envelope" style={{ marginRight: '10px', color: '#007bff' }}></i>
              Shoot us an E-mail
            </Link>
          </div>
          <div className="mb-4">
            <h4 style={{ color: '#990000' }}>Call us</h4>
            <p>Call our team Mon-Sat from 8am-8pm</p>
            <p><i className="fas fa-phone" style={{ marginRight: '10px', color: '#007bff' }}></i>+91 12345 12345</p>
            <p><i className="fas fa-phone" style={{ marginRight: '10px', color: '#007bff' }}></i>+91 12345 12345</p>
          </div>
          <div>
            <h4 style={{ color: '#990000' }}>Visit us</h4>
            <p>Chat to us in person at Main Studio</p>
            <p>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#dc3545' }}></i>
              297, behind Veer Maruti Mandir, Shaniwar Peth, Pune, Maharashtra 411030
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
