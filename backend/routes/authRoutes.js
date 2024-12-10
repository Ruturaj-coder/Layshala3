const express = require('express');
const bcrypt = require('bcryptjs'); // For password comparison
const jwt = require('jsonwebtoken'); // For JWT token generation
const Registration = require('../models/Registration');

const router = express.Router();

// Route: Handle login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await Registration.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare the hashed password with the stored password (email)
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token (store user data with id and name)
        const token = jwt.sign({ user: { id: user._id, name: user.studentName } }, 'secretKey', { expiresIn: '1h' });

        // Respond with the token
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


// Protecting the route with JWT middleware
router.get('/user-data', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).send({ error: 'No token, authorization denied' });

        const decoded = jwt.verify(token, 'secretKey');
        const user = await Registration.findById(decoded.user.id);

        if (!user) return res.status(404).send({ error: 'User not found' });

        res.status(200).send({
            name: user.studentName,
            email: user.email,
            mobile: user.phonePrimary,
            image: user.image, // Returning the Base64 image string
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
});



module.exports = router;
