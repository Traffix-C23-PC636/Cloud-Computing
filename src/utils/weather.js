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

function getWeatherDescription(weathercode, isDay) {
  let description = ''
  let iconUrl = ''

  switch (weathercode) {
    case 0:
      description = 'Cerah';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/3.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/9.png';
      break
    case 1:
      description = 'Sebagian Cerah';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/3.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/9.png';
      break
    case 2:
      description = 'Sebagian Berawan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/1.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png';
      break
    case 3:
      description = 'Mendung';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/6.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/6.png';
      break
    case 45:
      description = 'Kabut';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/4.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/4.png';
      break
    case 48:
      description = 'Kabut Beku';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/4.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/4.png';
      break
    case 51:
      description = 'Gerimis Ringan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 53:
      description = 'Gerimis Sedang';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 55:
      description = 'Gerimis';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 56:
      description = 'Gerimis Beku Ringan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 57:
      description = 'Gerimis Beku Tinggi';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/12.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 61:
      description = 'Hujan Ringan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/2.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/14.png';
      break
    case 63:
      description = 'Hujan Sedang';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/7.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/7.png';
      break
    case 65:
      description = 'Hujan Tinggi';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/7.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/7.png';
      break
    case 66:
      description = 'Hujan Beku Ringan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png';
      break
    case 67:
      description = 'Hujan Beku Tinggi';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png';
      break
    case 80:
      description = 'Hujan Petir Ringan';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png';
      break
    case 81:
      description = 'Hujan Petir Sedang';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png';
      break
    case 82:
      description = 'Hujan Petir Tinggi';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/11.png';
      break
    case 95:
      description = 'Badai Petir'
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/16.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/16.png';
      break
    default:
      description = 'Kode cuaca tidak diketahui';
      iconUrl = (isDay === 1) ? 'https://storage.googleapis.com/traffix_assets/weather%20icon/3.png' : 'https://storage.googleapis.com/traffix_assets/weather%20icon/9.png';
      break
  }

  return {description, iconUrl}
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
        const description = getWeatherDescription(weatherData.weathercode, weatherData.is_day);
        const filteredData = {
          weather: {
            temperature: weatherData.temperature,
            is_day: weatherData.is_day,
            weather_code: description.description,
            icon_url: description.iconUrl
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

export {getWeatherData, getCurrentWeather}
