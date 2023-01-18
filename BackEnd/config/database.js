const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, { useUnifiedTopology: true })
    .then((data) => {
      console.log(`Mongodb connected with sserver :${data.connection.host}`);
    });
  // .catch((err)=>{
  //            console.log(err)
  //         })
};

module.exports = connectDatabase;
