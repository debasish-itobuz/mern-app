import mongoose from "mongoose";

const url = "mongodb+srv://mern:mern@cluster0.htmyn4j.mongodb.net/"

const dbConnection = mongoose.connect(url).then(()=>{
    console.log("Connected Successfully");
    }).catch((error)=>{
        console.log(error);
    })

export default dbConnection;