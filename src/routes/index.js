import express from 'express'

export const router = express.Router()

// Home
router.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to Traffix REST API'
  })
})
