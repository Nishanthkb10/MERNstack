const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://nishanthkb:password_@cluster0.jsa4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting DB: ", error.message);
  }
};

module.exports = connectDb;