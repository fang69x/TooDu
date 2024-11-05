// model/user.model.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Pre-save hook to hash the password
userSchema.pre('save', async function(next) {
    try {
        const user = this;

        // Only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;

        next(); // Call next to proceed with saving the user
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
});

// Ensure the model name starts with a capital letter
const UserModel = db.model('User', userSchema);
module.exports = UserModel;
