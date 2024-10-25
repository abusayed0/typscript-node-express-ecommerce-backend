import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const addOrderToDB = async (orderData: TOrder) => {
    const result = await Order.create(orderData);
    return result;
};

const getAllOrderFromToDB = async (searchEmail: string) => {
    let result;
    if(searchEmail){
       result = await Order.find({email: searchEmail});
    }else{
      result =  await Order.find({});
    }
    return result;
};


export const orderServices = {
    addOrderToDB,
    getAllOrderFromToDB
}