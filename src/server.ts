import { Request, Response } from "express";
import app from "./app"
import config from "./app/config"
import connectDB from "./app/utilities/connectDB"

main();

async function main() {

    //first connect to db, then start server.
    await connectDB();

    try {
        app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`)
        });
    } catch (error) {
        console.log(`app start error: ${error}`);
    }
}