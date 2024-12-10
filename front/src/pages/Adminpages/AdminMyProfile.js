// import React, { useState } from "react";

// const MyProfile = () => {
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       {/* Header Section */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4>Personal info</h4>
//           <p className="text-muted">Update your photo and personal details here</p>
//         </div>
//         <div>
//           <button className="btn btn-outline-secondary me-2">Cancel</button>
//           <button className="btn btn-warning text-white">Save</button>
//         </div>
//       </div>

//       {/* Form Section */}
//       <form>
//         {/* Name Input */}
//         <div className="mb-3 row">
//           <label htmlFor="name" className="col-sm-2 col-form-label">
//             Name
//           </label>
//           <div className="col-sm-5">
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               placeholder="First Name"
              
//             />
//           </div>
//           <div className="col-sm-5">
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               placeholder="Last Name"
              
//             />
//           </div>
//         </div>

//         {/* Email Input */}
//         <div className="mb-3 row">
//           <label htmlFor="email" className="col-sm-2 col-form-label">
//             Email address
//           </label>
//           <div className="col-sm-10">
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="student@gmail.com"
//             />
//           </div>
//         </div>

//         {/* Photo Upload Section */}
//         <div className="mb-3 row align-items-center">
//           <label htmlFor="photo" className="col-sm-2 col-form-label">
//             Your Photo
//           </label>
//           <div className="col-sm-2 text-center">
//             <div
//               className="rounded-circle border"
//               style={{
//                 width: "80px",
//                 height: "80px",
//                 overflow: "hidden",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {imagePreview ? (
//                 <img
//                   src={imagePreview}
//                   alt="Profile"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               ) : (
//                 <i className="bi bi-person" style={{ fontSize: "2rem" }}></i>
//               )}
//             </div>
//           </div>
//           <div className="col-sm-8">
//             <div className="border rounded p-4 text-center" style={{ backgroundColor: "#f9f9f9" }}>
//               <div className="input-group mb-3">
//                 <input
//                   type="file"
//                   className="form-control"
//                   id="inputGroupFile02"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                 />
//                 <label className="input-group-text" htmlFor="inputGroupFile02">
//                   Upload
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MyProfile;
import React, { useState, useContext } from "react";
import { UserContext } from "./AdminUserContext";

const AdminMyProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [imagePreview, setImagePreview] = useState(user.photo || null);
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Update UserContext with the new details
    setUser({
      ...user,
      photo: imagePreview,
      firstName,
      lastName,
    });
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4>Personal info</h4>
          <p className="text-muted">Update your photo and personal details here</p>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2">Cancel</button>
          <button className="btn btn-warning text-white" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      {/* Form Section */}
      <form>
        {/* Name Input */}
        <div className="mb-3 row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="mb-3 row align-items-center">
          <label htmlFor="photo" className="col-sm-2 col-form-label">
            Your Photo
          </label>
          <div className="col-sm-2 text-center">
            <div
              className="rounded-circle border"
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <i className="bi bi-person" style={{ fontSize: "2rem" }}></i>
              )}
            </div>
          </div>
          <div className="col-sm-8">
            <div
              className="border rounded p-4 text-center"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required
                />
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminMyProfile;

