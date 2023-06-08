import express from "express";
import {registerUser} from "./controllers/userFunction.js";
import { logInUser } from "./controllers/userFunction.js";

const router = express.Router();

router.post('/register',registerUser);
router.post('/login',logInUser);

export default router; 