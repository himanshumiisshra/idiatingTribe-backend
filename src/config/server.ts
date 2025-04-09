import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "http";
var bodyParser = require('body-parser');
import { todosRoute } from "../routes/todoRoutes/todoRoutes";



class App {
    public app: express.Application;
    public server: any;
    


    constructor() {
        this.app = express();
        this.server = createServer(this.app);

        this.config();
        dotenv.config();
        this.mongoSetup();
        this.routes();
    }

    private config(): void {
        this.app.use(cors({ origin: "*" }));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(bodyParser.json({ limit: "60mb" }));
    }


    private mongoSetup(): void {
        const mongoUri: string | undefined = process.env.MONGOURI;
    
        if (!mongoUri) {
            console.error("❌ MONGOURI is not defined in environment variables.");
            process.exit(1);
        }
    
        mongoose.connect(mongoUri)
            .then(() => {
                console.log("✅ DATABASE is CONNECTED! 🚀");
            })
            .catch((error: unknown) => {
                console.error("❌ DATABASE connection error:", error);
                process.exit(1);
            });
    }

  
    private routes(): void {

        this.app.get("/", (_req, res) => {
            res.send("👋 Hello backend TODO App for idiatingTribe!");
        });

        const todoRoutes = new todosRoute(this.server);
        todoRoutes.route(this.app);
      
    }
}
const appInstance = new App();
export const app = appInstance.app;
export const server = appInstance.server;