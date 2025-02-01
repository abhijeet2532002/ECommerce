import UserDB from '../model/User.js';
import JsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv';
import Middleware from '../config/MiddleWare.js';
dotenv.config();

const { passwordEncrypt, comparePassword, passwordValidator, Auth } = new Middleware();

export default class User {
    register = async (req, res) => {
        try {
            passwordValidator(req?.body?.password);
            const password = passwordEncrypt(req?.body?.password);

            const saveData = await UserDB.create({ ...req.body, password });
            return res.status(200).json({
                message: "Data saved successfully",
                saveData
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error in creating data",
                error: error.message
            });
        }
    }

    login = async (req, res) => {
        try {
            const { UserId, password } = req.body;
            const fetchData = await UserDB.findOne({
                $or: [
                    { email: UserId },
                    { userName: UserId },
                    { phone: UserId }
                ]
            });

            if (!fetchData)
                return res.status(404).json({ message: "User not found" });

            const isPasswordValid = await comparePassword(password, fetchData.password);
            if (!isPasswordValid)
                return res.status(401).json({ message: "Invalid Email ID or Password" });
            else {
                jwt.verify(fetchData.authToken, process.env.SECRET_KEY, async (err) => {
                    if (err) {
                        fetchData.authToken = JsonWebToken.sign({
                            userName: fetchData?.userName,
                            email: fetchData?.email,
                            userRole: fetchData?.userRole
                        }, process.env.SECRET_KEY, { expiresIn: "1m" });
                        await fetchData.save();
                    }
                    return res.status(200).json(fetchData?.authToken);
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }

    logout = async (req, res) => {
        try {
            if (!req?.user?.email) {
                return res.status(400).json({ message: "User email is required" });
            }

            const fetchData = await UserDB.findOneAndUpdate(
                { email: req.user.email },
                { authToken: null },
                { new: true }
            );

            if (!fetchData) {
                return res.status(404).json({
                    message: `User doesn't exist - ${req.user.email}`
                });
            }

            return res.status(200).json({
                message: "Logout successful"
            });

        } catch (error) {
            console.error("Logout Error:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    };

    getAllUser = async (req, res) => {
        try {
            const userRole = req.user.userRole;
            if (userRole && userRole === "Admin") {
                const userData = await UserDB.find({});
                if (!userData)
                    return res.status(200).json({ "message": "No user found" });
                return res.status(200).json(userData);
            } else
                return res.status(403).json({ "message": "You are not valid user to get all the whole details of user" });
        } catch (error) {
            return res.status(500).json({ "message": error?.message });
        }
    }

    DeleteUserByEmail = (req, res) => {
        try {
            const deletedUserData = UserDB.findOneAndDelete({ email: req.user.email });
            return deletedUserData ? res.status(200).json(deletedUserData) : res.status(404).json({ message: "User not found" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    modifyUserByEmail = async (req, res) => {
        try {
            const updatedUser = await UserDB.findOneAndUpdate({ email: req.user.email }, req.body, { new: true });
            return updatedUser ? res.status(200).json(updatedUser) : res.status(404).json({ message: "User not found" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };

};