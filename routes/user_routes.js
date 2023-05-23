import express from "express";
import { login } from "../controllers/user_controller.js";
import { addproduct } from "../controllers/product_controller.js";

const router = express.Router();

router.get("/login", login);
router.post("/addproduct",addproduct);


export default router;

