import userModel from "../models/userModel.js";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("Please provide mandatory fields");
    }

    const alreadyUser = await userModel.findOne({ email });

    if (alreadyUser) {
      res.status(400);
      throw new Error("User Already Exists");
    }

    const user = new userModel({
      name: name,
      email: email,
      password: password,
    });

    const savedUsers = await user.save();
    console.log(savedUsers);

    if (savedUsers?._id) {
      return res.status(200).json({
        data: null,
        success: true,
        message: "User Created Successfully",
      });
    } else {
      next(new Error("Failed to register user"));
    }
  } catch (error) {
    console.log(error);
  }
};

const logInUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        console.log("Please provide mandatory fields");
      }
  
      const alreadyUser = await userModel.findOne({ email });
  
      if (!alreadyUser) {
        res.status(400);
        throw new Error("User Dosen't Exists");
      }
  
      const data = new userModel({
        email: email,
        password: password,
      });
  
      const savedUsers = await data.save();
      console.log(savedUsers);
  
      if (savedUsers?._id) {
        return res.status(200).json({
          data: null,
          success: true,
          message: "Logged In Successfully",
        });
      } else {
        next(new Error("Failed to login"));
      }
    } catch (error) {
      console.log(error);
    }
  };



export { registerUser,logInUser};
