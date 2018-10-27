import UserModel from './model';

const User = {};

User.create = function create(req, res) {
  const user = new UserModel(req.body);

  user.save((err) => {
    if (err) throw err;
    res.send('created');
  });
};

User.read = function read(req, res) {
  UserModel.findById(req.auth._id, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

User.update = function update(req, res) {
  UserModel.findByIdAndUpdate(req.auth._id, req.body, (err) => {
    if (err) throw err;
    res.send('updated');
  });
};

User.remove = function remove(req, res) {
  UserModel.findByIdAndDelete(req.auth._id, (err) => {
    if (err) throw err;
    res.send('deleted');
  });
};

export default User;
