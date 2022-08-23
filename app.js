const express = require("express");
const app = express();
const items = require("./routes/items");
const connetDB = require("./db/connect");
require("dotenv").config();

// middlewares

app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Maliha Assign backend");
});

app.use("/api/v1/items", items);

const port = 4000;

const start = async () => {
  try {
    await connetDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.error();
  }
};

start();
