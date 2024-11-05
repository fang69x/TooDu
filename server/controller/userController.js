// controller/userController.js
const UserService = require('../services/userServices');

class UserController {
    static async register(req, res) {
        const { email, password } = req.body;

        try {
            const user = await UserService.registerUser(email, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: 'Registration failed', error: error.message });
        }
    }
}

module.exports = UserController;
