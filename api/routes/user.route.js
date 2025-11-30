import express, { Router } from "express";
//verifyToken as middleware
import {getUserDashboard, 
        createUser,
        getSingleUser,
        updateUser,
        deleteUser,} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/", createUser);
router.get("/:id/dashboard", getUserDashboard);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser); //verifyToken as middleware
router.put("/:id", deleteUser); //verifyToken as middleware

export default router;

