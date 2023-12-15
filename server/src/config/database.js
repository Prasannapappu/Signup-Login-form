const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/signup", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
mongoose
  .connect(
    "mongodb+srv://prasannavelu23:1EXXb2NLqHJ4pmnL@cluster0.kyzzgwc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Db connected ");
  })
  .catch((err) => {
    console.log("Db not connected");
  });

module.exports = mongoose.connection;
