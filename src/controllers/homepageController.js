import {getCurrentWeather} from '../utils/weather.js'
import ATCSModel from "../models/atcsModel.js";

const HomePageController = {
  get: async (req, res) => {
    const weatherData = await getCurrentWeather()
    const atcsData = await ATCSModel.findAll({
      where: {
        kota_id: 32
      },
      attributes: {
        exclude: ['updatedAt', 'kota_id']
      }
    })

    let statData = []

    atcsData.forEach(item => {
      statData.push({
        info: item,
        statistik: {}
      })
    })

    res.json({
      status: 200,
      data: {
        weather: weatherData.weather,
        list_atcs: statData
      }
    })
  }
}

export default HomePageController
