import express from "express";
import config from "./config.js";
import dbConnection from "./dbConnection.js";
import userSchema from "./models/userModel.js";
import router from "./routes.js";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/user",router)

app.listen(config.PORT,()=>{
    console.log(`Server is connected to port ${config.PORT}`);
})