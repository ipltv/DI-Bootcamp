import fs from 'fs';

const text = fs.readFileSync("source.txt", "utf-8");
fs.writeFileSync("destination.txt", text, "utf-8");

