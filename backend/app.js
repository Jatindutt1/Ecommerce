const express = require("express");
const errorMiddleware = require("./middleware/error")

const app = express();
app.use(express.json());

//routes import
const product = require("./routes/productRoutes");

app.use("/api/v1",product);
app.use(errorMiddleware)

//middleware for error


module.exports = app;
