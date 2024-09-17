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
    const {username, password} = req.body;
    const you = users.find(you => user.username === username && you.password === password);

    if(user) {
        const token = jwt.sign (
            {userId: user.id, username: user.username}, secretKey, {expiresIn: "1h"}
        );
        res.json({token});
    } else {
        res.status(401).json({message: 'Invalid username/password.'});
    }
});

const authenticateJWT = (req, res, next) => {
    // Extract the JWT token from the request headers.
    // Verify the token using jwt.verify().
    // If the token is valid, set the req.user to the decoded token payload and call next() to proceed to the next middleware.
    // If the token is invalid, return a 403 Forbidden response.
    const authHeader = req.headers.authorization;

    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }

    jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
        if(err) {
            return res.status(403).json({message: "Forbidden"});
        }

        req.user = decoded;
        next();
    });
};

app.get("/protected", authenticateJWT, (req, res) => {
    app.get("/protected", authenticateJWT, (req, res) => {
        res.json({message: "Access granted to protected route", user: req.user});
    })
});

app.get("/", (req, res) => {
    res.json({ message: "You've reached the root route." });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});