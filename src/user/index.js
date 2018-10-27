import UserModel from './model';
import encode from '../token/encode';

const User = {};

User.create = async function create(req, res) {
  const user = new UserModel(req.body);
  try {
    const newUser = await user.save(user);
    try {
      const token = await encode({
        _id: newUser._id,
        username: newUser.username,
      });
      await res.send({
        user,
        token,
      });
    } catch (err) {
      console.error(err);
      res.send(err);
    }
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

User.read = async function read(req, res) {
  try {
    const user = await UserModel.findById(req.auth._id);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

User.update = async function update(req, res) {
  try {
    const user = await UserModel.findByIdAndUpdate(req.auth._id);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

User.remove = async function remove(req, res) {
  try {
    const user = await UserModel.findByIdAndDelete(req.auth._id);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

export default User;
