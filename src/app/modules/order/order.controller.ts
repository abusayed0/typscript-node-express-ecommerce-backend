import { Request, Response } from "express";
import { TOrder } from "./order.interface";
import { orderServices } from "./order.service";

const addOrder = async (req: Request, res: Response) => {
    try {
        const orderData: TOrder = req.body;
        const result = await orderServices.addOrderToDB(orderData);
        res.status(200).json({
            success: true,
            message: "Order created successfully",
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
}
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const searchEmail = req.query.email ?? "";
        
        const result = await orderServices.getAllOrderFromToDB(searchEmail as string);
        res.status(200).json({
            success: true,
            message: "Get all orders successfully",
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
}

export const orderControllers = {
    addOrder,
    getAllOrders,
};