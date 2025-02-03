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

    getDetailsOfBusinessById = (req, res) => { }

    getAllBusinessDetails = (req, res) => { }

    deleteBusinessById = (req, res) => { }

    modifyBusinessDetailsById = (req, res) => { }
}