const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const productsRouter = require("./api/routes/router_products");
const ordersRouter = require("./api/routes/router_orders");
const usersRouter = require("./api/routes/router_users");
const mainRouter = require("./api/routes/router_main");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/", mainRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

const db = "mongodb+srv://baek:tkfkdgody1!@cluster0-drx3a.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db, { useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false, useCreateIndex: true })
    .then(()=> console.log("몽고디비 연결성공"))
    .catch(err => console.log("몽고디비 연결에러"))

app.listen(3000,console.log("서버 실행, http://localhost:3000/"));