import chalk from 'chalk';
console.log(chalk.blue('Hello world!'));
const log = console.log;
log(chalk.blue.bgRed.bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));