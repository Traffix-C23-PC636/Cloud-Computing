import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import {router} from './routes/index.js'
import {Logging} from "@google-cloud/logging";
import log from "./utils/logging.js";


const app = express()
const logging = new Logging();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors(
    {
        origin: ['*', 'http://localhost:3000', 'https://dashboard.traffix.my.id'],
        optionsSuccessStatus: 200
    }
));
app.use(router)

;(async function () {
    app.listen(8080, () => {
        console.log('Server listening on port 8080')
    })
})().catch(async () => {
    await log.alert('Server Failed To Start');
})
