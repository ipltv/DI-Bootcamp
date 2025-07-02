import fsp from 'fs/promises';
console.log(await fsp.readdir("./"));