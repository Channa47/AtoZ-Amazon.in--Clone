const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const crypto=require("crypto")


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    maxLength: [30, "Name cannot exceed 30 charactors"],
    minLength: [4, "Name should more than 4 charactors"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your password"],
    minlength: [8, "Password should more than 8 charactors"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role:{
    type: String,
    default:"user",
  },
  resetPasswordToken:String,
  resetPasswordExpire:Date,

});
//pre means before saving userSchema  
//we use bcrypt to stronger the password and nobody can see it in real form 
userSchema.pre("save",async function(next){
//if password is not updated then we dont need to bcrpt the passwod again
    if(!this.isModified("password")){
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

//JWT Token
//it is a packeage to generate token and store in cookies
//and it will automatically log in
userSchema.methods.getJWTToken=function(){
return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE
})
}


//compaire Password
userSchema.methods.comparePassword=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password)
  //it will return true or false
}


//Generating Password reset Token
userSchema.methods.getResetPasswordToken=function(){
//Generating Token
//using crypto
const resetToken=crypto.randomBytes(20).toString("hex")

//Hashing and adding to userSchema
this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")

this.resetPasswordExpire=Date.now() + 15*60*1000;

return resetToken;
}
module.exports = mongoose.model("User", userSchema);
