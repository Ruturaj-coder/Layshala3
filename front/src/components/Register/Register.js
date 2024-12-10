// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Register.css'; 
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [file, setFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState('');
//   const [signatureFile, setSignatureFile] = useState(null);
//   const [signaturePreviewUrl, setSignaturePreviewUrl] = useState('');


//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       const fileType = selectedFile.type;
//       const validImageTypes = ['image/jpeg', 'image/jpg','image/png'];
//       const validPdfTypes = ['application/pdf'];
//       const validDocTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

//       if (validImageTypes.includes(fileType)) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           setPreviewUrl(e.target.result);
//         };
//         reader.readAsDataURL(selectedFile);
//       } else if (validPdfTypes.includes(fileType)) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           setPreviewUrl(e.target.result);
//         };
//         reader.readAsDataURL(selectedFile);
//       } else if (validDocTypes.includes(fileType)) {
//         alert('Preview not available for Word documents.');
//         setPreviewUrl('');
//       } else {
//         alert('Invalid file type. Please upload a JPEG, JPG, PDF, PNG or Word document.');
//         setPreviewUrl('');
//       }
//       setFile(selectedFile);
//     }
//   };

//   const handleSignatureChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       const fileType = selectedFile.type;
//       const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];

//       if (validImageTypes.includes(fileType)) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           setSignaturePreviewUrl(e.target.result);
//         };
//         reader.readAsDataURL(selectedFile);
//       } else {
//         alert('Invalid file type. Please upload a JPEG , JPG or PNG image for the signature.');
//         setSignaturePreviewUrl('');
//       }
//       setSignatureFile(selectedFile);
//     }
//   };


//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex flex-column align-items-center form-header">
//           {/* <img src="path/to/your/logo.png" alt="Layashala Logo" /> */}
//           <h1 className="text-center" style={{color:'#800000',fontFamily: 'Old Standard TT, serif', fontWeight: 'bold' }}>Layashala Kathak Kendra</h1>
//           <p className="text-center" style={{color:'#FFA800',fontFamily: 'Open Sans, serif', fontWeight: '600' }}>Learn the art of dance Kathak 'Lucknow Gharana'</p>
//           <p className="text-center" style={{color:'#FFA800',fontFamily: 'Open Sans, serif', fontWeight: '600' }}>H.O.: 297, Shaniwar Peth, Behind Veer Maruti Mandir, Pune-30, Maharashtra - INDIA</p>
//           <h2 className="text-center">REGISTRATION FORM & ADMISSION FORM</h2>
//           <p className="text-center">Venue: ______________________________ Morning / Evening / Online (Choose which is applicable)</p>
//         </div>

//         <form>
//           <div className="form-group row">
//             <label htmlFor="venue" className="col-sm-2 col-form-label">Venue</label>
//             <div className="col-sm-6">
//               <input type="text" className="form-control" id="venue" placeholder="Venue" />
//             </div>
//             <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
//             <div className="col-sm-2">
//               <input type="date" className="form-control" id="date" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="studentName" className="col-sm-2 col-form-label">Student’s Name</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" id="studentName" placeholder="Student’s Name" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
//             <div className="col-sm-4">
//               <input type="date" className="form-control" id="dob" />
//             </div>
//             <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
//             <div className="col-sm-4">
//               <input type="number" className="form-control" id="age" placeholder="Age" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="school" className="col-sm-2 col-form-label">School</label>
//             <div className="col-sm-4">
//               <input type="text" className="form-control" id="school" placeholder="School" />
//             </div>
//             <label htmlFor="grade" className="col-sm-2 col-form-label">Grade</label>
//             <div className="col-sm-4">
//               <input type="text" className="form-control" id="grade" placeholder="Grade" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="college" className="col-sm-2 col-form-label">College</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" id="college" placeholder="College" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="occupation" className="col-sm-2 col-form-label">Occupation (in case of working)</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" id="occupation" placeholder="Occupation" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label className="col-sm-2 col-form-label">Gender</label>
//             <div className="col-sm-4">
//               <select className="form-control" id="gender">
//               <option selected>Choose...</option>
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Others</option>
//               </select>
//             </div>
//             <label htmlFor="maritalStatus" className="col-sm-2 col-form-label">Marital Status</label>
//             <div className="col-sm-4">
//               <select className="form-control" id="gender">
//               <option selected>Choose...</option>
//                 <option>Married</option>
//                 <option>UnMarried</option>
//                 <option>Divorce</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="aadhaarNo" className="col-sm-2 col-form-label">Aadhaar No.</label>
//             <div className="col-sm-4">
//               <input type="text" className="form-control" id="aadhaarNo" placeholder="Aadhaar No." />
//             </div>
//             <label htmlFor="panNo" className="col-sm-2 col-form-label">PAN No.</label>
//             <div className="col-sm-4">
//               <input type="text" className="form-control" id="panNo" placeholder="PAN No." />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="religion" className="col-sm-2 col-form-label">Religion</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="religion" placeholder="Religion" />
//             </div>
//             <label htmlFor="caste" className="col-sm-2 col-form-label">Caste</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="caste" placeholder="Caste" />
//             </div>
//             <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="nationality" placeholder="Nationality" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="previousDanceEducation" className="col-sm-2 col-form-label">Previous Dance Education</label>
//             <div className="col-sm-10">
//               <textarea className="form-control" id="previousDanceEducation" placeholder="Previous Dance Education"></textarea>
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="guruName" className="col-sm-2 col-form-label">Name and address of Guru</label>
//             <div className="col-sm-10">
//               <textarea className="form-control" id="guruName" placeholder="Name and address of Guru"></textarea>
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="examsAppeared" className="col-sm-2 col-form-label">Exams appeared / Cleared</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" id="examsAppeared" placeholder="Exams appeared / Cleared" />
//             </div>
//           </div>
//           <div className="form-group row">
//             <label htmlFor="gharana" className="col-sm-2 col-form-label">Gharana</label>
//             <div className="col-sm-10">
//               <input type="text" className="form-control" id="gharana" placeholder="Gharana" />
//             </div>
//           </div>

//           <p style={{ fontWeight: "bold" }}>Parents / Guardian Information</p>
//           <div className="form-group row">
//             <label htmlFor="fatherName" className="col-sm-2 col-form-label">Father's Name</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="fatherName" placeholder="Name" />
//             </div>
//             <label htmlFor="fatherOccupation" className="col-sm-2 col-form-label">Occupation</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="fatherOccupation" placeholder="Occupation" />
//             </div>
            
//             <label for="fatherSign" className="col-sm-2 col-form-label">Father's Signature</label>
//             <div className="col-sm-2">
//               <input className="form-control form-control-sm" id="fatherSignature" type="file" onChange={handleSignatureChange}/>
//             </div>
         
//             </div>
          
//           <div className="form-group row">
//             <label htmlFor="motherName" className="col-sm-2 col-form-label">Mother's Name</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="motherName" placeholder="Name" />
//             </div>
//             <label htmlFor="motherOccupation" className="col-sm-2 col-form-label">Occupation</label>
//             <div className="col-sm-2">
//               <input type="text" className="form-control" id="motherOccupation" placeholder="Occupation" />
//             </div>
//             <label for="MotherSign" className="col-sm-2 col-form-label">Mother's Signature</label>
//             <div className="col-sm-2">
//             <input className="form-control form-control-sm" id="MotherSignature" type="file"/>
//             </div>
//           </div>

//           <div className="form-group row">
//             <label htmlFor="homeAddress" className="col-sm-2 col-form-label">Home-Address</label>
//             <div className="col-sm-10">
//               <textarea className="form-control" id="homeAddress" placeholder="Home Address"></textarea>
//             </div>
//           </div>

//           <div className="form-group row">
//             <label htmlFor="primaryPhone" className="col-sm-2 col-form-label">Phone Number (Primary)</label>
//             <div className="col-sm-4">
//               <input type="tel" className="form-control" id="primaryPhone" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" />
//             </div>
//             <label htmlFor="alternatePhone" className="col-sm-2 col-form-label">Phone Number (Alternate)</label>
//             <div className="col-sm-4">
//               <input type="tel" className="form-control" id="alternatePhone" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" />
//             </div>
//           </div>

//           <div className="form-group row">
//             <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
//             <div className="col-sm-10">
//               <input type="email" className="form-control" id="email" placeholder="Email" />
//             </div>
//           </div>

//           <div className="form-group row">
//             <label htmlFor="emergencyContact" className="col-sm-2 col-form-label">Emergency Contact *</label>
//             <div className="col-sm-10">
//               <input type="tel" className="form-control" id="emergencyContact" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" required />
//             </div>
//           </div>
//           <div className="form-group row">
//            <label htmlFor="formFileSm" className="col-sm-2 col-form-label">Upload Passport Photo</label>
//               <div className="col-sm-10">
//                  <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleFileChange}/>
//             </div>
//           </div>

//           <div className="form-group row">
//             <div className="col-sm-12">
//               <div className="d-flex">
//                 {previewUrl && (
//                   <div className="mr-3">
//                     <h5>Passport Photo</h5>
//                     {file.type.startsWith('image') ? (
//                       <img src={previewUrl} alt="Passport Photo Preview" className="img-thumbnail" style={{ maxWidth: '200px' }} />
//                     ) : (
//                       <embed src={previewUrl} width="200px" height="200px" type={file.type} />
//                     )}
//                   </div>
//                 )}
//                 {signaturePreviewUrl && (
//                   <div>
//                     <h5>Father's Signature</h5>
//                     <img src={signaturePreviewUrl} alt="Father's Signature Preview" className="img-thumbnail" style={{ maxWidth: '200px' }} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className='d-flex justify-content-center'>
//           <button type="submit" className="btn" style={{ marginBottom: "20px", backgroundColor: '#FFA800', border: 'none',color:'#FFFFFF',fontFamily:'Noto Sans,serif'}}>Register</button>
//           </div>
//           <p className="text-center" style={{color:'#808080',fontFamily: 'Kdam Thmor, sans-serif',fontSize:'14px' }}>Already Have an Account? <Link to={'/login'} style={{color:'#800000',fontFamily: 'Old Standard TT, serif',fontSize:'16px', textDecoration:'None',fontWeight:600}}> Sign in</Link></p>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './Register.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
  //Scheme of the database 
  const [formData, setFormData] = useState({
    venue: '',
    date: '',
    studentName: '',
    dob: '',
    age: '',
    school: '',
    grade: '',
    college: '',
    occupation: '',
    gender: '',
    maritalStatus: '',
    aadhaarNo: '',
    panNo: '',
    religion: '',
    caste: '',
    nationality: '',
    previousDanceEducation: '',
    guruName: '',
    examsAppeared: '',
    gharana: '',
    parentDetails: {
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
    },
    homeAddress: '',
    phonePrimary: '',
    phoneAlternate: '',
    email: '',
    emergencyContact: '',
    passportPhoto: '',
    image: '',
});

//State Management of Photo and Signature
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [signatureFile, setSignatureFile] = useState(null);
  const [signaturePreviewUrl, setSignaturePreviewUrl] = useState('');


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const validImageTypes = ['image/jpeg', 'image/jpg','image/png'];
      const validPdfTypes = ['application/pdf'];
      const validDocTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (validImageTypes.includes(fileType)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(selectedFile);
      } else if (validPdfTypes.includes(fileType)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setPreviewUrl(e.target.result);
        };
        reader.readAsDataURL(selectedFile);
      } else if (validDocTypes.includes(fileType)) {
        alert('Preview not available for Word documents.');
        setPreviewUrl('');
      } else {
        alert('Invalid file type. Please upload a JPEG, JPG, PDF, PNG or Word document.');
        setPreviewUrl('');
      }
      setFile(selectedFile);
    }
  };

  //Form Validation and Authetication purpose
  const handleSignatureChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];

      if (validImageTypes.includes(fileType)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setSignaturePreviewUrl(e.target.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        alert('Invalid file type. Please upload a JPEG , JPG or PNG image for the signature.');
        setSignaturePreviewUrl('');
      }
      setSignatureFile(selectedFile);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('parentDetails')) {
        const [parentKey, parentValue] = name.split('.');
        setFormData((prevState) => ({
            ...prevState,
            parentDetails: {
                ...prevState.parentDetails,
                [parentValue]: value,
            },
        }));
    } else {
        setFormData({ ...formData, [name]: value });
    }
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Automatically set the password as the email
        const dataToSend = { ...formData, password: formData.email };
        const response = await axios.post('http://localhost:5000/api/register', dataToSend);
        alert(response.data.message);
    } catch (error) {
        console.error(error);
        alert('Registration failed. Please try again.');
    }
};

//wrapper class
const combinedFileChangeHandler = (event) => {
  handleFileChange(event); // Call the first function
  handleImageChange(event); // Call the second function
};


  return (
    <>
      <div className="container mt-5">
        <div className="d-flex flex-column align-items-center form-header">
          {/* <img src="path/to/your/logo.png" alt="Layashala Logo" /> */}
          <h1 className="text-center" style={{color:'#800000',fontFamily: 'Old Standard TT, serif', fontWeight: 'bold' }}>Layashala Kathak Kendra</h1>
          <p className="text-center" style={{color:'#FFA800',fontFamily: 'Open Sans, serif', fontWeight: '600' }}>Learn the art of dance Kathak 'Lucknow Gharana'</p>
          <p className="text-center" style={{color:'#FFA800',fontFamily: 'Open Sans, serif', fontWeight: '600' }}>H.O.: 297, Shaniwar Peth, Behind Veer Maruti Mandir, Pune-30, Maharashtra - INDIA</p>
          <h2 className="text-center">REGISTRATION FORM & ADMISSION FORM</h2>
          <p className="text-center">Venue: ______________________________ Morning / Evening / Online (Choose which is applicable)</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="venue" className="col-sm-2 col-form-label">Venue</label>
            <div className="col-sm-6">
              <input type="text"  name="venue"  value={formData.venue} onChange={handleInputChange} className="form-control" id="venue" placeholder="Venue" />
            </div>
            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-2">
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-control" id="date" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="studentName" className="col-sm-2 col-form-label">Student’s Name</label>
            <div className="col-sm-10">
              <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} className="form-control" id="studentName" placeholder="Student’s Name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-4">
              <input type="date" name="dob" onChange={handleInputChange} value={formData.dob} className="form-control" id="dob" />
            </div>
            <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-4">
              <input type="number"  name="age" value={formData.age} onChange={handleInputChange} className="form-control" id="age" placeholder="Age" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="school" className="col-sm-2 col-form-label">School</label>
            <div className="col-sm-4">
              <input type="text" name="school" value={formData.school} onChange={handleInputChange} className="form-control" id="school" placeholder="School" />
            </div>
            <label htmlFor="grade" className="col-sm-2 col-form-label">Grade</label>
            <div className="col-sm-4">
              <input type="text"  name="grade" value={formData.grade}  onChange={handleInputChange} className="form-control" id="grade" placeholder="Grade" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="college" className="col-sm-2 col-form-label">College</label>
            <div className="col-sm-10">
              <input type="text" name="college"  value={formData.college} onChange={handleInputChange} className="form-control" id="college" placeholder="College" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="occupation" className="col-sm-2 col-form-label">Occupation (in case of working)</label>
            <div className="col-sm-10">
              <input type="text" name="occupation" value={formData.occupation}  onChange={handleInputChange} className="form-control" id="occupation" placeholder="Occupation" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-4">
              <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="">Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
              </select>
            </div>
            <label htmlFor="maritalStatus" className="col-sm-2 col-form-label">Marital Status</label>
            <div className="col-sm-4">
              <select className="form-control" id="gender" name="maritalStatus" value={formData.maritalStatus}  onChange={handleInputChange}>
              <option value="">Choose...</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
              <option value="Divorced">Divorced</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="aadhaarNo" className="col-sm-2 col-form-label">Aadhaar No.</label>
            <div className="col-sm-4">
              <input type="text"  name="aadhaarNo" value={formData.aadhaarNo} onChange={handleInputChange} className="form-control" id="aadhaarNo" placeholder="Aadhaar No." />
            </div>
            <label htmlFor="panNo" className="col-sm-2 col-form-label">PAN No.</label>
            <div className="col-sm-4">
              <input type="text" name="panNo" value={formData.panNo} onChange={handleInputChange} className="form-control" id="panNo" placeholder="PAN No." />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="religion" className="col-sm-2 col-form-label">Religion</label>
            <div className="col-sm-2">
              <input type="text"  name="religion" value={formData.religion} onChange={handleInputChange} className="form-control" id="religion" placeholder="Religion" />
            </div>
            <label htmlFor="caste" className="col-sm-2 col-form-label">Caste</label>
            <div className="col-sm-2">
              <input type="text" name="caste"  value={formData.caste} onChange={handleInputChange} className="form-control" id="caste" placeholder="Caste" />
            </div>
            <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
            <div className="col-sm-2">
              <input type="text" name="nationality"  value={formData.nationality}  onChange={handleInputChange} className="form-control" id="nationality" placeholder="Nationality" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="previousDanceEducation" className="col-sm-2 col-form-label">Previous Dance Education</label>
            <div className="col-sm-10">
              <textarea className="form-control" name="previousDanceEducation" value={formData.previousDanceEducation} onChange={handleInputChange} id="previousDanceEducation" placeholder="Previous Dance Education"></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="guruName" className="col-sm-2 col-form-label">Name and address of Guru</label>
            <div className="col-sm-10">
              <textarea className="form-control" name="guruName"  value={formData.guruName} onChange={handleInputChange} id="guruName" placeholder="Name and address of Guru"></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="examsAppeared" className="col-sm-2 col-form-label">Exams appeared / Cleared</label>
            <div className="col-sm-10">
              <input type="text" name="examsAppeared"  value={formData.examsAppeared}  onChange={handleInputChange} className="form-control" id="examsAppeared" placeholder="Exams appeared / Cleared" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="gharana" className="col-sm-2 col-form-label">Gharana</label>
            <div className="col-sm-10">
              <input type="text"  name="gharana" value={formData.gharana}  onChange={handleInputChange} className="form-control" id="gharana" placeholder="Gharana" />
            </div>
          </div>

          <p style={{ fontWeight: "bold" }}>Parents / Guardian Information</p>
          <div className="form-group row">
            <label htmlFor="fatherName" className="col-sm-2 col-form-label">Father's Name</label>
            <div className="col-sm-2">
              <input type="text" name="parentDetails.fatherName"  value={formData.parentDetails.fatherName} onChange={handleInputChange} className="form-control" id="fatherName" placeholder="Name" />
            </div>
            <label htmlFor="fatherOccupation" className="col-sm-2 col-form-label">Occupation</label>
            <div className="col-sm-2">
              <input type="text"  name="parentDetails.fatherOccupation"  value={formData.parentDetails.fatherOccupation} onChange={handleInputChange} className="form-control" id="fatherOccupation" placeholder="Occupation" />
            </div>
            
            <label for="fatherSign" className="col-sm-2 col-form-label">Father's Signature</label>
            <div className="col-sm-2">
              <input className="form-control form-control-sm" id="fatherSignature" type="file" onChange={handleSignatureChange}/>
            </div>
         
            </div>
          
          <div className="form-group row">
            <label htmlFor="motherName" className="col-sm-2 col-form-label">Mother's Name</label>
            <div className="col-sm-2">
              <input type="text"  name="parentDetails.motherName" value={formData.parentDetails.motherName} onChange={handleInputChange} className="form-control" id="motherName" placeholder="Name" />
            </div>
            <label htmlFor="motherOccupation" className="col-sm-2 col-form-label">Occupation</label>
            <div className="col-sm-2">
              <input type="text"   name="parentDetails.motherOccupation"  value={formData.parentDetails.motherOccupation}  onChange={handleInputChange} className="form-control" id="motherOccupation" placeholder="Occupation" />
            </div>
            <label for="MotherSign" className="col-sm-2 col-form-label">Mother's Signature</label>
            <div className="col-sm-2">
            <input className="form-control form-control-sm" id="MotherSignature" type="file"/>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="homeAddress" className="col-sm-2 col-form-label">Home-Address</label>
            <div className="col-sm-10">
              <textarea className="form-control"  name="homeAddress" value={formData.homeAddress} onChange={handleInputChange} id="homeAddress" placeholder="Home Address"></textarea>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="primaryPhone" className="col-sm-2 col-form-label">Phone Number (Primary)</label>
            <div className="col-sm-4">
              <input type="tel" name="phonePrimary"  value={formData.phonePrimary} onChange={handleInputChange} className="form-control" id="primaryPhone" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" />
            </div>
            <label htmlFor="alternatePhone" className="col-sm-2 col-form-label">Phone Number (Alternate)</label>
            <div className="col-sm-4">
              <input type="tel" className="form-control" id="alternatePhone" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" name="email"  value={formData.email} onChange={handleInputChange} className="form-control" id="email" placeholder="Email" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="emergencyContact" className="col-sm-2 col-form-label">Emergency Contact *</label>
            <div className="col-sm-10">
              <input type="tel"   name="emergencyContact"  value={formData.emergencyContact}  onChange={handleInputChange} className="form-control" id="emergencyContact" placeholder="eg-(012-345-6789)" pattern="[0-9]{10}" maxLength="10" required />
            </div>
          </div>
          <div className="form-group row">
           <label htmlFor="formFileSm" className="col-sm-2 col-form-label">Upload Passport Photo</label>
              <div className="col-sm-10">
                 <input className="form-control form-control-sm" id="formFileSm" type="file" onChange={combinedFileChangeHandler}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <div className="d-flex">
                {previewUrl && (
                  <div className="mr-3">
                    <h5>Passport Photo</h5>
                    {file.type.startsWith('image') ? (
                      <img src={previewUrl} alt="Passport Photo Preview" className="img-thumbnail" style={{ maxWidth: '200px' }} />
                    ) : (
                      <embed src={previewUrl} width="200px" height="200px" type={file.type} />
                    )}
                  </div>
                )}
                {signaturePreviewUrl && (
                  <div>
                    <h5>Father's Signature</h5>
                    <img src={signaturePreviewUrl} alt="Father's Signature Preview" className="img-thumbnail" style={{ maxWidth: '200px' }} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn" style={{ marginBottom: "20px", backgroundColor: '#FFA800', border: 'none',color:'#FFFFFF',fontFamily:'Noto Sans,serif'}}>Register</button>
          </div>
          <p className="text-center" style={{color:'#808080',fontFamily: 'Kdam Thmor, sans-serif',fontSize:'14px' }}>Already Have an Account? <Link to={'/login'} style={{color:'#800000',fontFamily: 'Old Standard TT, serif',fontSize:'16px', textDecoration:'None',fontWeight:600}}> Sign in</Link></p>
        </form>
      </div>
    </>
  );
}

export default Register;

