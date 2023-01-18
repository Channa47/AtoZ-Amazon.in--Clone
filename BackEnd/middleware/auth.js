const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  //token  is already object so we directly put token inside object
  const { token } = req.cookies;
  // console.log(token)

  if (!token) {
    return next(new ErrorHander("Please LogIn to access this resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    //checking if user is admin or not
    //if user is not admin then  below
    // console.log(req.user.role)
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allow to access this resource`,
          403
        )
      );
    }
    //if user is admin then next
    next();
  };
};
