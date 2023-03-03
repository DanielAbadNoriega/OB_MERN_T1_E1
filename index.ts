/**
 * First simply configuration, next better configuration in index.ts
 */
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the .env file
dotenv.config();

console.log("Process.env. ", process.env);

// Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define first Route of APP
app.get("/", (req: Request, res: Response) => {
  // Send HELLO WORLD
  res.send("Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose");
});

app.get("/hello", (req: Request, res: Response) => {
  // Send HELLO WORLD
  res.send("Welcome to GET Route: !Hello World!");
});

// Execute APP and Listen Request to PORT
app.listen(port, () =>
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
);