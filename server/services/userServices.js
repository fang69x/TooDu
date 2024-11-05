// services/user.service.js
const UserModel = require('../model/userModel');

class UserService {
    static async registerUser(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();
        } catch (err) {
            throw err; // You might want to handle specific errors, like duplicate emails
        }
    }
}

module.exports = UserService;
