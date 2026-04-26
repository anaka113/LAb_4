const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const logDir = process.env.LOG_DIR || "./logs";
const logFile = path.join(logDir, "app.log");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

app.get("/", (req, res) => {
    const message = `Request at ${new Date().toISOString()}\n`;

    fs.appendFileSync(logFile, message);  
    console.log(message.trim());          

    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
