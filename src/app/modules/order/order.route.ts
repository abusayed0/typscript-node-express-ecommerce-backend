import { Router } from "express";
import { orderControllers } from "./order.controller";

const orderRouter = Router();

orderRouter.post("/", orderControllers.addOrder);
orderRouter.get("/", orderControllers.getAllOrders);


export const orderRoutes = orderRouter;