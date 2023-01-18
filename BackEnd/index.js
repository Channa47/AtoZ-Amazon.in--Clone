const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Handle Uncaught Exception 
//means i write console.log(anyting) in any where it give me error ReferenceError: anyting is not defined
//to avoid it we are handleing this erroe
process.on("uncaughtException",(error)=>{
    console.log(`Error:${error.message}`);
    console.log(`Uncaught Exception`)
    process.exit(1)
})
// console.log(anyting)
//config
dotenv.config({ path: "config/config.env" });

//Connectiong to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost${process.env.PORT}`);
});

//Unhandleed Promice rejection
//if i put incorrect server URL to handle that error
//"mongodb://127.0.0.1:27017/Ecommerce"
process.on("unhandledRejection", (error) => {
  console.log(`Error:${error.message}`);
  console.log("shouting down server due to Unhandled Prmice Rejection");
  server.close(() => {
    process.exit(1);
  });
});
