import {successMessages} from '../utils/responseMessage.js'

const HomeController = {
    get: (req, res) => {
        res.json({
            status: 200,
            message: successMessages.welcome
        })
    }
}

export default HomeController
