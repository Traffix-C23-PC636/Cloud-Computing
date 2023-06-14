// config database
import {Sequelize} from 'sequelize'
import {loadSecretsToEnvironment} from '../utils/secretManager.js'
import {initFirebaseAdmin} from './firebase.js'

const sequelize = await loadSecretsToEnvironment().then(async () => {
    await initFirebaseAdmin()

    let dbConfig = JSON.parse(process.env.DB_CONFIG)

    dbConfig = {
        DB_NAME: dbConfig.DB_NAME,
        DB_USER: dbConfig.DB_USER,
        DB_PASS: dbConfig.DB_PASS,
        DB_HOST: dbConfig.DB_HOST
    }
    return new Sequelize(
        dbConfig.DB_NAME,
        dbConfig.DB_USER,
        dbConfig.DB_PASS,
        {
            host: dbConfig.DB_HOST,
            dialect: 'mysql',
            define: {
                freezeTableName: true,
            },
            dialectOptions: {
                useUTC: false, //for reading from database
                dateStrings: true,
                typeCast: true
            },
            timezone: '+07:00'
        }
    )
})

export default sequelize
