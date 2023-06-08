import fs from 'fs'

const WeatherController = {
  get: (req, res) => {
    const rawcity = req.query.kota;

    let city;
    if (rawcity) {
      city = rawcity
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    } else {
      res.send("parameter kota tidak boleh kosong");
    }

    fs.readFile("cache/weather.json", (err, data) => {
      let weather = JSON.parse(data.toString());
      let weatherData = weather.filter((element) =>
        element.kota.includes(city)
      );

      if (weatherData.length > 0) {
        res.send(weatherData[0]);
      } else {
        res.send("kota tidak ditemukan");
      }
    });
  },
};

export default WeatherController;
