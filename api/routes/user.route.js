import express from "express";
import {deleteUser, gigUser, updateUser} from "../controller/user.controller.js";
import {verifyToken} from "../middleware/jwt.js";




const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, gigUser);
router.put("/:id", verifyToken, updateUser);

export default router;
