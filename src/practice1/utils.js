import {ADDRESS, PATH, PORT} from "./constant";

function getURL() {
  return `${ADDRESS}:${PORT}${PATH}`;
};

export default getURL;

