import express from 'express'
import HomeController from "../controllers/home_controller.js";

export const router = express.Router()

// Home
router.get('/', HomeController.get)
