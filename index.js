const express = require("express");
const app = express();
const userRouter = require("./router.js")

// get method testing here
/* app.get("/home/user", (req, res) => {
    console.log("this is user page.");
});

app.get("/home", (req, res) => {
    console.log("this is home page.");
});

app.get("/", (req, res) => {
    console.log("this is home page.");
}); */

// post method testing
/* app.post("/home/user", (req, res) => {
    console.log("this is user page.");
});

app.post("/home", (req, res) => {
    console.log("this is home page.");
});

app.post("/", (req, res) => {
    console.log("this is home page.");
}); */

// testing express.json() to collect data in json formate
/* app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Data Posted");
}); */

// testing express.raw() to collect data in raw formate
/* app.use(express.raw());

app.post("/", (req, res) => {
    console.log(req.body.toString());
    res.send("Data Posted");
}); */

// testing express.text() to collect data in text formate
/* app.use(express.text());

app.post("/", (req, res) => {
    console.log(req.body.toString());
    res.send("Data Posted");
}); */

//testing express.urlencoded() to collect data from form
/* app.use(express.urlencoded());

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Data Posted");
}); */

//testing express.static() to collect data from file
/* app.use(express.static("./assets"));

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Data Posted");
}); */

// using express.Route()

const route = express.Router();

app.use("/users",userRouter);

/* route.get("/user", (req, res) => {
    console.log("this is user route.");
}) */

// server listening here
app.listen(3000, () => {
    console.log("server running at 3000 port.............!");
});


