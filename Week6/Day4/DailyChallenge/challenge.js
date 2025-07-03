import { greet } from "./Task1/greeting.js";
import { logColorfulMsg } from "./Task2/colorful-message.js";
import { getDataFromFile } from "./Task3(files)/read-file.js";
logColorfulMsg(greet("User"), "red");
logColorfulMsg(getDataFromFile("./Task3(files)/file-data.txt"),"blue");