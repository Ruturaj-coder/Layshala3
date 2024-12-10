
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    contact: "",
    classExperience: "",
    teacherFeedback: "",
    suggestions: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedbackData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="container my-5">
      <div
        className="card p-4"
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          fontFamily: "Noto Sans",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        <h3 className="text-center mb-4" style={{fontWeight:"800",opacity:0.6,fontSize:"24px"}}>Feedback Form</h3>
        <form onSubmit={handleSubmit}>
          {/* Name and Email in one row */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={feedbackData.name}
                id="name"
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={feedbackData.email}
                id="email"
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact Number:
            </label>
            <input
              type="tel"
              className="form-control"
              name="contact"
              value={feedbackData.contact}
              id="contact"
              onChange={handleChange}
              placeholder="Enter your contact number"
              required
            />
          </div>

          {/* Class Experience */}
          <div className="mb-3">
            <label className="form-label">
              How was your experience with the classes?
            </label>
            <textarea
              className="form-control"
              name="classExperience"
              value={feedbackData.classExperience}
              onChange={handleChange}
              rows="3"
              placeholder="Share your experience"
              required
            />
          </div>

          {/* Teacher Feedback */}
          <div className="mb-3">
            <label className="form-label">Feedback about the teacher(s):</label>
            <textarea
              className="form-control"
              name="teacherFeedback"
              value={feedbackData.teacherFeedback}
              onChange={handleChange}
              rows="3"
              placeholder="Share your feedback about the teacher(s)"
              required
            />
          </div>

          {/* Suggestions */}
          <div className="mb-3">
            <label className="form-label">Any suggestions for improvement:</label>
            <textarea
              className="form-control"
              name="suggestions"
              value={feedbackData.suggestions}
              onChange={handleChange}
              rows="3"
              placeholder="Share your suggestions"
            />
          </div>

          {/* Rating */}
          <div className="mb-3">
            <label className="form-label">Overall Rating (1 to 5):</label>
            <select
              className="form-select"
              name="rating"
              value={feedbackData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-warning px-5">
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminFeedback;
