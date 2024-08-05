import Mobile from '../../modal/seller/mobiles.js';
import User from '../../modal/user.js';



export const mobilesData = async (req, res) => {
    const mobiles = await Mobile.find({});
    if (mobiles) {

        return res.status(200).json(
            {
                message: "got the mobile list",
                data:
                {
                    mobiles: mobiles
                }
            })
    } else {
        return res.status(401).json(
            {
                message: "error in finding the mobiles",

            })
    }
}




export const getItem = async (req, res) => {

    try {

      
        const item = await Mobile.findById(req.params.id);
        // console.log(req.params.id);
        if (item) {
            // console.log(item);

            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: item
                })
        }

        else {
            return res.status(401).json(
                {
                    message: "item not found",

                })
        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error in getting the item",
                error: error,

            })
    }

}


export const getAllItemByName = async (req, res) => {

    try {

        // console.log(req.params);
        const items = await Mobile.find({modelName:req.params.id});
        // console.log(items, "///you are special for me ");
        if (items) {

            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: items
                })
        }

        else {
            return res.status(401).json(
                {
                    message: "item not found",

                })
        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error in getting the item",
                error: error,

            })
    }

}

export const getAllItemByCompanyName = async (req, res) => {

    try {

        // console.log(req.params, "//***");
        const items = await Mobile.find({companyName:req.params.companyName});
        // console.log(items, "///you are special for me ");
        if (items) {

            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: items
                })
        }

        else {
            return res.status(401).json(
                {
                    message: "item not found",

                })
        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error in getting the item",
                error: error,

            })
    }

}


export const addmobile = async (req, res) => {
    try {
        // console.log('Request User:', req.user);
        // console.log('Request Body:', req.body);

        const seller = await User.findById(req.body.seller_ref);
        // console.log('Seller:', seller);

        if (seller && seller.id == req.user.id) {
            const newMobile = await Mobile.create(req.body);
            // console.log('New Mobile:', newMobile);

            if (newMobile) {
                return res.status(200).json({
                    message: "New mobile added",
                    newMobile: newMobile,
                });
            } else {
                return res.status(500).json({
                    message: "Failed to create new mobile",
                });
            }
        } else {
            return res.status(401).json({
                message: "Seller not found or unauthorized",
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Error in adding new mobile",
            error: error.message,
        });
    }
};
