import common from "./common.json";
import config from "./config.json";
import custom from "./custom.json";
import validator from "./validator.json";

const merge = Object.assign({}, common, config, custom, validator);
export default merge;
