import express from 'express'
import HomeController from '../controllers/homeController.js'
import WeatherController from '../controllers/weatherController.js';


export const router = express.Router()

router.get('/', HomeController.get)
router.get('/weather', WeatherController.get)
