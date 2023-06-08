import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes/index.js";
import { getWeatherData } from "./weather/resource.js";
import { connectToDatabase } from "./config/database.js";
import { loadSecretsToEnvironment } from "./utils/secretManager.js";
import { initFirebaseAdmin } from "./config/firebase.js";
import WeatherController from "./controllers/weatherController.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

loadSecretsToEnvironment()
  .then(async () => {
    await connectToDatabase();
    await initFirebaseAdmin();

    app.listen(8080, () => {
      console.log("Server listening on port 8080");

      // Update
      getWeatherData().then(() => {
        const oneDayInMs = 86400000;
        setInterval(() => WeatherController.get(), oneDayInMs);
      });
    });
  })
  .catch((err) => {
    console.log("Failed to start: " + err);
    process.exit(1);
  });
