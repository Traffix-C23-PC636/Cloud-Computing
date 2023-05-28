import {SecretManagerServiceClient} from '@google-cloud/secret-manager'
import * as path from 'path'

const client = new SecretManagerServiceClient({
    keyFilename: path.resolve('D:/privatekey/traffix-cloud-c5f8eb50caa1.json')
})

export default client
