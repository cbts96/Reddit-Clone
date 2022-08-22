require("dotenv").config();
import express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";

const main = async () => {
  const dataSources = new DataSource({
    type: "postgres",
    database: "reddit",
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    synchronize: true,
    logging: true,
    port: 5000,
  });
  const port = process.env.PORT || 5000;
  dataSources.initialize().then(() => {
    const app = express();
    app.listen(port, () => {
      console.log(`Database connect succuessfully on port${port}`);
    });
  });
};

main().catch(() => console.log("ERR when connecting to database"));
