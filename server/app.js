const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/userRoute");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", router);

mongoose
  .connect(
    "mongodb+srv://guhaneswaran006:tenny010@cluster0.hsmq1.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(3456, () => {
  console.log("server running");
});
