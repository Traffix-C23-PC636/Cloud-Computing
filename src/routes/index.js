import express from 'express'
import HomeController from "../controllers/homeController.js";
import firebaseAuthMiddleware from "../midldewares/firebaseAuthMiddleware.js";

export const router = express.Router()

router.get('/',firebaseAuthMiddleware, HomeController.get)
