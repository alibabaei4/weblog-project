const path = require("path");

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const passport = require('passport');
const dotEnv = require("dotenv");
const morgan = require("morgan");
const flash = require('connect-flash');
const session = require('express-session');

const connectDB = require("./config/db");

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

//* Passport Configuration
require('./config/passport');

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//* View Engine
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("layout", "./layouts/mainLayout");
app.set("views", "views");

//* BodyPaser
app.use(express.urlencoded({ extended: false }));

//! Session 
app.use(session({
    secret: "secret",
    cookie: {maxAge: 6000 },
    resave: false,
    saveUninitialized: false,
}));

//* Passport 
app.use(passport.initialize());
app.use(passport.session());

//? Flash
app.use(flash()); //req.flash

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use("/", require("./routes/blog"));
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));

//* 404 Page
app.use((req,res) => {
    res.render("404",{
        pageTitle:"صفحه مورد نظر پیدا نشد | 404",
        path:"/404"
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
