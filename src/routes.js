import User from './user';

function Router(server) {
  server.get('/users', User.read);
  server.post('/users', User.create);
  server.patch('/users', User.update);
  server.del('/users', User.delete);
}

export default Router;
