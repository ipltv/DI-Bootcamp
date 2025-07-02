import chalk from "chalk";

export function logColorfulMsg(text, color='red'){
    color = color.toLowerCase();
    const log = console.log;
    switch (color) {
        case "red":
                log(chalk.red(text));
            break;
        case "green":
                log(chalk.green(text));
            break;
        case "blue":
                log(chalk.blue(text));
            break;
        default:
            break;
    }
}