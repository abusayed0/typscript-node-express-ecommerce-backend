import { Error, model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../product/product.model";



const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: true,
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});


orderSchema.pre("save", async function (next) {
    const order = this;
    const { quantity, productId } = order;

    const product = await Product.findById(productId);
    if (product) {
        const availableProduct = product.inventory.quantity;
        if (availableProduct >= quantity) {

            
            //update product inventory quantity
            product.inventory.quantity = availableProduct - quantity;

            // if no product remain make instock false
            if(availableProduct - quantity === 0){
                product.inventory.inStock = false;
            }

            await product.save()
            next();
        } else {
            // product stock out
            throw new Error("insuffient stock")
        }
    } else {
        // product does not even exist
        throw new Error("Product does not exits")
    }
})
export const Order = model<TOrder>("Order", orderSchema);