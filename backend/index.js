const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

// use express.json() to get data in json format
app.use(express.json());

// port
const PORT = process.env.PORT || 5500;

// lets imports routes

const TodoItemRoutes = require("./routes/todoItems");
// lets connect to mongodb
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoutes);
// Add ports and connect to server
app.listen(PORT, () => console.log("Server connected"));
