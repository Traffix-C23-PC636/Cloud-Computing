import express from 'express'
import {router} from './routes/index.js'
import {connectToDatabase} from './config/database.js'
import {loadSecretsToEnvironment} from "./utils/secretManager.js";
import {initFirebaseAdmin} from "./config/firebase.js";

const app = express()

app.use(express.json())
app.use(router)

loadSecretsToEnvironment().then(async () => {
  await connectToDatabase()
  await initFirebaseAdmin()

  app.listen(8080, () => {
    console.log('Server listening on port 8080')
  })
}).catch(() => {
  console.log('Failed to start')
  process.exit(1)
})
