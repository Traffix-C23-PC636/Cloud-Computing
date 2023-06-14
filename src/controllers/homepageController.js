import {getCurrentWeather} from '../utils/weather.js'
import ATCSModel from "../models/atcsModel.js";
import StatistikModel from "../models/statistikModel.js";

const HomePageController = {
  get: async (req, res) => {
    const weatherData = await getCurrentWeather()
    const atcsData = await ATCSModel.findAll({
      where: {
        kota_id: 32
      },
      attributes: {
        exclude: ['updatedAt', 'kota_id', 'createdAt', 'is_monitoring', 'stream_url']
      }
    })

    let statData = []

    for (const item of atcsData) {
      const statistik = await StatistikModel.findAll({
        where: {
          id_atcs: item.id_atcs
        },
        attributes: {
          exclude: ['id', 'id_atcs'],
        },
        order: [['createdAt', 'DESC']],
        limit: 3
      })
      statData.push({
        info: item,
        statistik
      })
    }

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
