import express from 'express'
import HomeController from '../controllers/homeController.js'
import HomepageController from '../controllers/homepageController.js'
import KotaController from '../controllers/kotaController.js'
import ATCSController from '../controllers/atcsController.js'
import {firebaseAuthMiddlewareAdmin} from "../midldewares/firebaseAuthMiddleware.js";

export const router = express.Router()

router.get('/', firebaseAuthMiddlewareAdmin, HomeController.get)
// I have merged weather endpoint to homepage endpoint
// router.get('/api/weather', WeatherController.get)
router.get('/api/homepage', HomepageController.get)

router.post('/api/admin/kota', KotaController.post)
router.get('/api/admin/kota', KotaController.get)
router.delete('/api/admin/kota/:id', KotaController.delete)

router.post('/api/admin/atcs', ATCSController.post)
router.get('/api/admin/atcs', ATCSController.get)
router.delete('/api/admin/atcs/:id', ATCSController.delete)


