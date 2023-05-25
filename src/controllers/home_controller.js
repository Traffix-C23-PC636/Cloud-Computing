const HomeController = {
    get: (req, res) =>{
        res.json({
            status: 200,
            message: 'Welcome to Traffix REST API'
        })
    }
}

export default HomeController