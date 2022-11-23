const express = require("express");
const path = require("path");

const app = express();


//whenever path includes'static' we are going to serve the directory frontend/static
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//sending all the paths (pages) to index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html")); 
});

//running the server
app.listen(process.env.PORT || 8080, () => console.log('server is running on', process.env.PORT || 8080))