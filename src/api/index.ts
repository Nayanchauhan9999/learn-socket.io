import express, { Express } from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import { UserRoute, homeRoute } from "../routes";
import connectToDatabase from "../utils/dbConnection";
import http from "http";
import { Server, Socket } from "socket.io";

dotenv.config({
  path: "./.env",
});
connectToDatabase().then((data) => {
  const port = process.env.PORT || 8080;

  // create express app instance
  const app: Express = express();
  const server = http.createServer(app);

  const io: Server = new Server(server);

  io.on("connection", (client: Socket) => {
    console.log("client connected", client.id);

    client.on("disconnect", () => {
      console.log("user is disconnect");
    });

    client.on("message", (message) => {
      client.emit("message", "hello from server");
    });
  });

  app.use(express.json());

  // routes
  app.use("/api/v1/", homeRoute);
  app.use("/api/v1/user", UserRoute);

  server.listen(port, () => {
    console.log(
      `server running at : ${chalk.yellow("http://localhost:" + port)}`
    );
  });
});
