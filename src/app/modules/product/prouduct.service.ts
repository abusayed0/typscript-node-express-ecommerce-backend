import { TProduct } from "./product.interface";
import { Product } from "./product.model"

const addProductToDB = async (productData: TProduct) => {
    const result = await Product.create(productData);
    return result;
};
const getAllProductsFromDB = async (searchTerm: string) => {
    let result;
    if (searchTerm) {
        result = await Product.find({ $text: { $search: searchTerm } });
    } else {
        result = await Product.find({});
    }
    return result;
};

const getSingleProductFromDB = async (productId: string) => {
    const result = await Product.findById(productId);
    return result;
};

const updateSingleProductFromDB = async (productData: TProduct, productId: string) => {
    let product = await Product.findOneAndUpdate({ _id: productId }, { $set: { ...productData } }, { new: true })

    return product;
};

const deleteSingleProductFromDB = async (productId: string) => {
    let product = await Product.deleteOne({ _id: productId })
    return product;
};


export const productServices = {
    addProductToDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateSingleProductFromDB,
    deleteSingleProductFromDB
}