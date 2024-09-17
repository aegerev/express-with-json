const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const secretKey = "your-secret-key";


const users = [
    { id: 1, username: "ariel", password: "NewAtlantica2024!" },
    { id: 2, username: "pinguin", password: "OtVinta!" },
   ];
   

app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
 
    const token = jwt.sign(
        { userId: user.id, username: user.username },
        secretKey,
        { expiresIn: "1h" }
    );
    res.json({ token });
});
    
    // Middleware to authenticate JWT token
    const authenticateJWT = (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
 
        jwt.verify(token.split(" ")[1], secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden" });
        }
 
        req.user = decoded;
        next();
    });
};
    
    // Protected route that requires JWT authentication
    app.get("/protected", authenticateJWT, (req, res) => {
        res.json({ message: "Access granted to protected route", user: req.user });
    });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to NET - First In Education Nationwide." });

});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});