const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const secretKey = "new-atlantica";

const users = [
    {id: 1, username: "ariel", password: "NewAtlantica2024!"},
    {id: 2, username: "pinguin", password: "OtVinta!"}
]

app.use(bodyparser.json());

app.post("/login", (req, res) => {

});

const authenticateJWT = (req, res, next) => {
    // TODO: Implement the middleware to authenticate JWT token
};

app.get("/protected", authenticateJWT, (req, res) => {
    // TODO: Implement the protected route
});

app.get("/", (req, res) => {
    res.json({ message: "You've reached the root route." });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});