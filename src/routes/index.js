import express from 'express'
import HomeController from '../controllers/homeController.js'
import FirebaseAuthMiddleware from "../midldewares/firebaseAuthMiddleware.js";

export const router = express.Router()

router.get('/', FirebaseAuthMiddleware, HomeController.get)
