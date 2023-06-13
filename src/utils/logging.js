import {Logging} from "@google-cloud/logging";

const logging = new Logging();
const log = logging.log("Traffix-API");

export default log
