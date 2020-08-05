const fs = require('fs');
const chalk = require('chalk-animation');

const contents = fs.readdirSync('./animals');

const animation = chalk.rainbow(
    contents.join('\n')
);

setTimeout(() => animation.stop(), 1300);