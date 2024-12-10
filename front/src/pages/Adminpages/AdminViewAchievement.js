import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/AchievementForm.css"; // For additional custom styles

const AdminAchievementForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    rank: "",
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, certificate: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container my-5">
      <div
        className="card p-4"
        style={{
          backgroundColor: "#f8f9fa", // Light gray background
          borderRadius: "8px",
          fontFamily: "Noto Sans"
        }}
      >
        <h3 className="text-center mb-4" style={{fontWeight:"800",fontSize:"20px"}}>SUBMIT YOUR ACHIEVEMENT</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Name of the Event:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Enter the event name"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Date of the Event:</label>
            <div className="col-sm-8">
              <input
                type="date"
                className="form-control"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Rank Achieved:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                placeholder="Enter the rank"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Upload Certificate:</label>
            <div className="col-sm-8">
              <input
                type="file"
                className="form-control"
                accept=".jpg,.jpeg,.png,.gif,.svg"
                onChange={handleFileChange}
                required
              />
              <small className="form-text text-muted">
                SVG, PNG, JPG, or GIF (max. 800x400px)
              </small>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning px-5">
              Submit Achievement
            </button>
          </div>
        </form>
      </div>
      <div className="card mt-4 p-4">
        <h4 className="text-center" style={{fontFamily:"Noto Sans",fontWeight:"800",fontSize:"20px",opacity:"0.5"}}>PREVIOUS ACHIEVEMENTS</h4>
        {/* Add code to display previously submitted achievements */}
      </div>
    </div>
  );
};

export default AdminAchievementForm;
