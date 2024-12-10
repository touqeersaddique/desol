const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AbdulBasit99786:Basit123@cluster0.s7lrrds.mongodb.net/hadi/next",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
