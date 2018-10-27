import User from './user';
import Package from './package';
import Version from './versions';

function Router(server) {
  server.get('/users', User.read);
  server.post('/users', User.create);
  server.patch('/users', User.update);
  server.del('/users', User.remove);
}

export default Router;
