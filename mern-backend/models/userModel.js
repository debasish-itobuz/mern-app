import mongoose from "mongoose";
const userModel = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
})

const userSchema = mongoose.model("user",userModel);
export default userSchema;
