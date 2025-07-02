import { greet } from "./greeting.js";
import { logColorfulMsg } from "./colorful-message.js";
import { getDataFromFile } from "./read-file.js";
logColorfulMsg(greet("User"), "red");
logColorfulMsg(getDataFromFile("./file-data.txt"),"blue");