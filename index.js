const express = require("express"),
app = express(),
port = 2025;

app.get("/", (req, res) => {
    res.sendFile(__dirname.concat("/index.html"));
})

app.listen(port, () => {
    console.log(`The server is already running at http://localhost:${port}/`)
})