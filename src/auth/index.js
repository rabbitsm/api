import UserModel from '../user/model';
import encode from '../token/encode';

const Auth = {};

Auth.create = async function create(req, res) {
  const {
    username,
    password,
  } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (user.password === password) {
      try {
        const token = await encode({
          _id: user._id,
          username,
        });
        await res.send({
          user,
          token,
        });
      } catch (err) {
        console.error(err);
        res.send(err);
      }
    } else {
      res.send('unauth');
    }
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

export default Auth;
