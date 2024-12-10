const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Registration = require('../models/Registration');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Registration.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ user: { id: user._id, name: user.studentName } }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getUserData = async (req, res) => {
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
            image: user.image,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Server error' });
    }
};

module.exports = { loginUser, getUserData };
