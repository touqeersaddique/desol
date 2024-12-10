const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config");

const loginRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", loginRoutes);
app.use("/", dashboardRoutes);

const PORT = 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
