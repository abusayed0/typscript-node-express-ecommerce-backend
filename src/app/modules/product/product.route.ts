import { Request, Response, Router } from "express"
import { prouductControlers } from "./product.controller";



const productRouter = Router();

productRouter.post("/", prouductControlers.addProduct);
productRouter.get("/", prouductControlers.getAllProducts);           
productRouter.get("/:productId", prouductControlers.getSingleProductById);           
productRouter.put("/:productId", prouductControlers.updateSingleProductById);           
productRouter.delete("/:productId", prouductControlers.deleteSingleProductById);           

export const productRoutes = productRouter;