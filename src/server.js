import restify from 'restify';

const server = restify.createServer();

server.listen(process.env.SERVER_PORT, () => {
  console.log(`> Server listening at ${process.env.SERVER_PORT}`);
});
