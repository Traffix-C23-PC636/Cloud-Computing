import express from 'express'
import HomeController from "../controllers/homeController.js";

export const router = express.Router()

router.get('/', HomeController.get)
