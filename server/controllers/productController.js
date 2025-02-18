const ProductModell= require("../Models/productModel");

const productDisplay=async(req, res)=>{
    try {
         const Product = await ProductModell.find({status:"primary"});
         res.status(200).send(Product);
    } catch (error) {
        console.log(error);
    }
}


module.exports={
    productDisplay
}