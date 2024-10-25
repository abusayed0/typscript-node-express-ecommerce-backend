import { Request, Response } from "express"
import { productServices } from "./prouduct.service"
import { TProduct } from "./product.interface";

const addProduct = async (req: Request, res: Response) => {
    try {
        const productData: TProduct = req.body;
        const result = await productServices.addProductToDB(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully",
            data: result
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message,
            error: error
        })
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm ?? "";
        console.log({searchTerm});
        const result = await productServices.getAllProductsFromDB(searchTerm as string);
        res.status(200).json({
            success: true,
            message: "Get all Products successfully",
            data: result
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message,
            error: error
        })
    }
};

const getSingleProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await productServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Get single product successfully",
            data: result
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message,
            error: error
        })
    }
};

const updateSingleProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = await productServices.updateSingleProductFromDB(productData, productId);
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: result
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message,
            error: error
        })
    }
};

const deleteSingleProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await productServices.deleteSingleProductFromDB(productId);
        console.log({result});
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: null
        })
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: true,
            message: error.message,
            error: error
        })
    }
};


export const prouductControlers = {
    addProduct,
    getAllProducts,
    getSingleProductById,
    updateSingleProductById,
    deleteSingleProductById,
}