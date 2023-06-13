import express from 'express'
import HomeController from '../controllers/homeController.js'
import HomepageController from '../controllers/homepageController.js'
import KotaController from '../controllers/kotaController.js'
import ATCSController from '../controllers/atcsController.js'
import StatistikController from "../controllers/statistikController.js";
import restrictToIP from "../midldewares/restrictToIP.js";
import firebaseAuthMiddleware from "../midldewares/firebaseAuthMiddleware.js";

export const router = express.Router()

router.get('/', HomeController.get)
// I have merged weather endpoint to homepage endpoint
// router.get('/api/weather', WeatherController.get)
router.get('/api/homepage', firebaseAuthMiddleware, HomepageController.get)

router.post('/api/admin/kota', firebaseAuthMiddleware, KotaController.post)
router.get('/api/admin/kota', firebaseAuthMiddleware, KotaController.get)
router.delete('/api/admin/kota/:id', firebaseAuthMiddleware, KotaController.delete)

router.get('/api/admin/statistik', firebaseAuthMiddleware, StatistikController.get)
router.delete('/api/admin/statistik/:id', firebaseAuthMiddleware, StatistikController.delete)

router.post('/api/admin/atcs', firebaseAuthMiddleware, ATCSController.post)
router.get('/api/admin/atcs', firebaseAuthMiddleware, ATCSController.get)
router.delete('/api/admin/atcs/:id', firebaseAuthMiddleware, ATCSController.delete)

router.post('/api/statistik', restrictToIP, StatistikController.post);


