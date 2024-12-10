const jwt = require("jsonwebtoken");
const Registration = require("../models/Registration");
const Achievement = require("../models/Achievement"); // Assuming you have an Achievement model

// Get student profile
const getStudentProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from headers
    if (!token) {
      return res.status(401).json({ error: "Authorization token is missing" });
    }

    // Decode the token to get the student ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const studentId = decoded.user.id; // Access student ID inside the 'user' object

    const student = await Registration.findById(studentId, "studentName email image");
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Return the student's profile and achievements
    res.json({
      firstName: student.studentName,
      email: student.email,
      photo: student.image,
    });
  } catch (error) {
    console.error("Error fetching student profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a new achievement
const addAchievement = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Authorization token is missing" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decoded.user.id;

    const file = req.file; // Assuming you're using multer for file uploads
    const certificateBase64 = file.buffer.toString("base64"); // Convert file buffer to Base64

    const newAchievement = new Achievement({
      studentId,
      eventName: req.body.eventName,
      eventDate: req.body.eventDate,
      rank: req.body.rank,
      certificate: certificateBase64, // Store Base64 string
    });

    await newAchievement.save();
    res.status(201).json({ message: "Achievement added successfully", achievement: newAchievement });
  } catch (error) {
    console.error("Error adding achievement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const getStudentAchievements = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token
    if (!token) {
      return res.status(401).json({ error: "Authorization token is missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decoded.user.id;

    // Fetch achievements for the logged-in student
    const achievements = await Achievement.find({ studentId });

    res.status(200).json({ achievements });
  } catch (error) {
    console.error("Error fetching achievements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getStudentProfile, addAchievement, getStudentAchievements };
