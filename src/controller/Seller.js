import SellerDB from '../model/Seller.js';
import UserDB from '../model/User.js';
import ProductDB from '../model/Product.js';
import OrderDB from '../model/Order.js';
import AddressDB from '../model/Address.js';

export default class Seller {
    createBusiness = async (req, res) => {
        try {
            const user = await UserDB.findOne({ email: req.user.email });
            if (!user)
                return res.status(401).json({ message: `User not exist` });
            else {
                const sellerInfo = await SellerDB.create(req.body);
                user.isSeller = true;
                user.seller = sellerInfo;
                user.save();

                return res.status(200).json({
                    message: `Bussiness create successfully `,
                    sellerInfo
                })
            }
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    getDetailsOfBusinessById = async (req, res) => {
        try {
            const seller = await SellerDB.findById(req.params.id).populate('user');
            if (!seller)
                return res.status(404).json({ "message": "Bussiness not established " });

            return (req.user.userRole === "Admin" || seller.user === req.user.userId) ?
                res.status(200).json(seller) :
                res.status(403).json({ message: "invalid user to get these details" });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    getAllBusinessDetails = async (req, res) => {
        try {
            return (req.user.userRole === "Admin") ?
                res.status(200).json(await SellerDB.findById(req.params.id).populate('user')) :
                res.status(403).json({ message: "invalid user to get these details" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    deleteBusinessById = (req, res) => { }

    modifyBusinessDetailsById = (req, res) => { }
}