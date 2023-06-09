import fs from 'fs'
import axios from 'axios'
import async from 'async'
import bmkgData from '../const/bmkg_data.js'

async function getWeatherData() {
  let data

  console.log('getting weather data...')

  async.forEachOf(
      bmkgData,
      async (link, key) => {
        try {
          // I changed to axios because request is deprecated library
          const response = await axios.get(link)
          console.log(link)

          if (response.status === 200) {
            data = response.data
          }
        } catch (error) {
          console.error(error)
        }
      },
      (err) => {
        if (err) {
          console.log(err)
        } else {
          const file = 'cache/weather.json'

          fs.writeFile(file, JSON.stringify(data), 'utf-8', (e) => {
            if (e) {
              console.log(e)
            } else {
              console.log('done get weather')
            }
          })
        }
      }
  )
}

function getWeatherDescription(weathercode) {
  let description = ''

  switch (weathercode) {
    case 0:
      description = 'Cerah'
      break
    case 1:
      description = 'Sebagian Cerah'
      break
    case 2:
      description = 'Sebagian Berawan'
      break
    case 3:
      description = 'Mendung'
      break
    case 45:
      description = 'Kabut'
      break
    case 48:
      description = 'Kabut Beku'
      break
    case 51:
      description = 'Gerimis Ringan'
      break
    case 53:
      description = 'Gerimis Sedang'
      break
    case 55:
      description = 'Gerimis'
      break
    case 56:
      description = 'Gerimis Beku Ringan'
      break
    case 57:
      description = 'Gerimis Beku Tinggi'
      break
    case 61:
      description = 'Hujan Ringan'
      break
    case 63:
      description = 'Hujan Sedang'
      break
    case 65:
      description = 'Hujan Tinggi'
      break
    case 66:
      description = 'Hujan Beku Ringan'
      break
    case 67:
      description = 'Hujan Beku Tinggi'
      break
    case 80:
      description = 'Hujan Petir Ringan'
      break
    case 81:
      description = 'Hujan Petir Sedang'
      break
    case 82:
      description = 'Hujan Petir Tinggi'
      break
    case 95:
      description = 'Badai Petir'
      break
    default:
      description = 'Kode cuaca tidak diketahui'
      break
  }

  return description
}

const getCurrentWeather = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('cache/weather.json', async (err, data) => {
      if (err) {
        reject(err)
        return
      }

      const weather = await JSON.parse(data.toString())
      const weatherData = weather.current_weather

      if (weatherData) {
        const filteredData = {
          weather: {
            temperature: weatherData.temperature,
            is_day: weatherData.is_day,
            weather_code: getWeatherDescription(weatherData.weathercode)
          }
        }
        resolve(filteredData)
      } else {
        const filteredData = {
          weather: {
            temperature: '-',
            is_day: 0,
            weather_code: '-'
          }
        }
        resolve(filteredData)
      }
    })
  })
}

export {getWeatherData, getWeatherDescription, getCurrentWeather}
