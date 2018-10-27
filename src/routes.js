import User from './user';
import Package from './package';
import Version from './versions';

import auth from './middlewares/auth';

function Router(server) {
  server.get('/users', auth, User.read);
  server.post('/users', User.create);
  server.patch('/users', auth, User.update);
  server.del('/users', auth, User.remove);
}

export default Router;
