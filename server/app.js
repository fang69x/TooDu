const express = require("express");
const body_parser = require("body-parser")
const userRouter = require('./routers/userRouter'); 
const ToDoRoute = require('./routes/todo.router');
const app = express();

app.use(body_parser.json());
app.use('/',userRouter);
app.use("/",ToDoRoute);
module.exports = app;