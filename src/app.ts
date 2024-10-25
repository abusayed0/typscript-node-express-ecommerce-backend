// dependencies 
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRoutes } from "./app/modules/product/product.route";
import { orderRoutes} from "./app/modules/order/order.route";


const app:Application = express();


// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors())

// routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// health check route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});




export default app;