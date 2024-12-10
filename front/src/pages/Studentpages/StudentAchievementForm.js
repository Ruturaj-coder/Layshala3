import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/AchievementForm.css"; // For additional custom styles
import axios from "axios";

const StudentAchievementForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    rank: "",
    certificate: null,
  });

  const [achievements, setAchievements] = useState([]);

  // Fetch previous achievements
  const fetchAchievements = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("User is not logged in");

      const response = await axios.get(
        "http://localhost:5000/api/student/achievements",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAchievements(response.data.achievements); // Assuming achievements are in the response data
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]); // Ensure this logs the selected file
    setFormData({ ...formData, certificate: e.target.files[0] });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("User is not logged in");

      const formDataToSend = new FormData();
      formDataToSend.append("eventName", formData.eventName);
      formDataToSend.append("eventDate", formData.eventDate);
      formDataToSend.append("rank", formData.rank);
      formDataToSend.append("certificate", formData.certificate); // File will be sent here

      await axios.post(
        "http://localhost:5000/api/student/achievements",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Fetch updated achievements
      fetchAchievements();
    } catch (error) {
      console.error("Error submitting achievement:", error);
    }
  };

  return (
    <div className="container my-5">
      <div
        className="card p-4"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
      >
        <h3
          className="text-center mb-4"
          style={{ fontWeight: "800", fontSize: "20px" }}
        >
          SUBMIT YOUR ACHIEVEMENT
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Form Fields for Event Name, Date, Rank, and Certificate */}
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">
              Name of the Event:
            </label>
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
            <label className="col-sm-4 col-form-label">
              Date of the Event:
            </label>
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
            <label className="col-sm-4 col-form-label">
              Upload Certificate:
            </label>
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

      {/* Display previous achievements */}
      <div className="card mt-4 p-4">
        <h4
          className="text-center"
          style={{
            fontFamily: "Noto Sans",
            fontWeight: "800",
            fontSize: "20px",
            opacity: "0.5",
          }}
        >
          PREVIOUS ACHIEVEMENTS
        </h4>
        <ul>
          {achievements.length > 0 ? (
            achievements.map((achievement) => (
              <li key={achievement._id}>
                <strong>{achievement.eventName}</strong> -{" "}
                {new Date(achievement.eventDate).toDateString()} -{" "}
                {achievement.rank}
                <br />
                <img
                  src={`data:image/jpg;base64,${achievement.certificate}`} // Adjust MIME type as needed
                  alt="certificate"
                  style={{ width: "150px", height: "auto" }}
                />
              </li>
            ))
          ) : (
            <p>No achievements to display</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default StudentAchievementForm;
