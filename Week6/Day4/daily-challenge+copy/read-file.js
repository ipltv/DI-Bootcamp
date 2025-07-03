import fs from 'fs';
export function getDataFromFile(path){
    try {
        const textData = fs.readFileSync(path,"utf-8");
        return textData;
    } catch (error) {
        console.log("Error has occured:\n" + error);
    }
}