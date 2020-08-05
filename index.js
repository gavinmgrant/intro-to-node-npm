const debug = require('debug'); // require local dependency

debug.enable('*'); // enable all (*) namespaces

const logger = debug('hello-world-logger'); // create logger

logger('Testy test test');
logger('Second testy test test');