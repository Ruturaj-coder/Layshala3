import React from "react";

const StudentHome = () => {
  return (
    <>
 <div className="container mt-4" style={{fontFamily:"Noto Sans",boxSizing:"border-box"}}>
      {/* Row of Boxes */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="card p-3 border">
            <div className="d-flex justify-content-between align-items-center">
              <span>Upcoming Events</span>
              <span className="badge bg-danger text-white rounded-circle">1</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 border">Assigned Teachers</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 border">My Courses</div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <h5>My Recent Activities</h5>
      <div className="card p-4" style={{ backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
        <p className="text-muted">No recent activities found.</p>
      </div>
    </div>
    </>
  );
};

export default StudentHome;
