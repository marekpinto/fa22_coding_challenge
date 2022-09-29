const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      /* CREATE & CONNECT TO YOUR OWN MONGODB DATABASE */
      "mongodb+srv://marekpinto:stCim1XgWDPLcdMv@h4i-coding-challenge.nnegae8.mongodb.net/?retryWrites=true&w=majority",
      connectionParams,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
