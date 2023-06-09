import {getCurrentWeather} from '../utils/weather.js'

const HomePageController = {
  get: async (req, res) => {
    const weatherData = await getCurrentWeather()
    res.json({
      status: 200,
      data: {
        weather: weatherData.weather,
        list_atcs: []
      }
    })
  }
}

export default HomePageController
