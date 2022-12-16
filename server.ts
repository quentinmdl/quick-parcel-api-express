// Imports
import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";

// Env configuration 
require('dotenv').config()

// Initialize & Configure Server
const server: Application = express();
server.use(express.json());
server.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:500000}));

// Import Controllers
const controller = require("./src/routes/route");

// Imports middlewares
import {Interceptor} from "./src/middlewares/interceptor";

// Middlewares
server.use(Interceptor);

// Default page
server.get("/", function (req: Request, res: Response) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// Export routes 
server.use("/api/controller", controller);


// Listening 
server.listen(process.env.API_PORT, function () {
  console.log(`Server running on port: ${process.env.API_PORT}`);
});