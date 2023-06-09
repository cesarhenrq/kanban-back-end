import dotenv from "dotenv";
dotenv.config();

import initializeDatabase from "./database";
initializeDatabase();

import express from "express";

import router from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
