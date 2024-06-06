const express = require("express");
const app = express();

app.use(express.json());

const blogRoutes = require("./routes/blogRoute");
app.use("/blogApi/v1", blogRoutes);

const dbConnect = require("./config/database");
dbConnect();

// starting the server

app.listen(8000, () => {
  console.log("Server Started at post 8000");
});

app.get("/", (req, res) => {
  res.send("This is home page for blogs");
});
