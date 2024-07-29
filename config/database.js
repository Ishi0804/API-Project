const mongoose = require("mongoose");

let DataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ishadixit1997:<12345>@cluster0.quxobin.mongodb.net/crude"
    );
    console.log("Database Connected....");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DataBase;