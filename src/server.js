import restify from 'restify';
import chalk from 'chalk';
import CFonts from 'cfonts';
import morgan from 'morgan';

import Router from './routes';

const server = restify.createServer();

// logging
server.use(morgan(`- >\
  ${chalk.blue(':date[web]')}\
  ${chalk.yellow(':method')}\
  ${chalk.white.bgRed(':url')}\
  ${chalk.cyan(':remote-addr')}\
  ${chalk.green(':response-time[3]')}\
  ${chalk.magenta(':status')}\
`));

// plugins and middlewares
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({
  mapParams: false,
}));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());

Router(server);

server.listen(process.env.SERVER_PORT, () => {
  CFonts.say('RSM API', {
    font: 'simple3d',
    colors: ['blueBright'],
  });

  console.log(chalk.greenBright(`> Server listening at ${process.env.SERVER_PORT}`));
});
